from flask_cors import CORS
from flask import Flask, Blueprint, request, jsonify, current_app
from app.bd import users_collection 
from passlib.hash import pbkdf2_sha256
import jwt
import secrets
from datetime import datetime, timedelta, timezone
from bson import ObjectId

# Configuración
SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
REFRESH_TOKEN_EXPIRE_DAYS = 7

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Configuración de Flask
app.config['SECRET_KEY'] = SECRET_KEY

# Función de generación de tokens
def generate_tokens(user_id):
    accessToken_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    refreshToken_expires = timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)

    accessToken = generate_access_token(user_id, expires_delta=accessToken_expires)
    refreshToken = generate_refresh_token(user_id, expires_delta=refreshToken_expires)
    
    return accessToken, refreshToken

def generate_access_token(user_id, expires_delta):
    to_encode = {"user_id": str(user_id)}
    expire = datetime.now(timezone.utc) + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, current_app.config['SECRET_KEY'], algorithm=ALGORITHM)

def generate_refresh_token(user_id, expires_delta):
    to_encode = {"user_id": str(user_id)}
    expire = datetime.now(timezone.utc) + expires_delta
    to_encode.update({"exp": expire, "type": "refresh"})
    return jwt.encode(to_encode, current_app.config['SECRET_KEY'], algorithm=ALGORITHM)

# Función para obtener un usuario por su correo electrónico
def get_user_by_email(email):
    user = users_collection.find_one({'email': email})
    return user

# Ruta de registro (signup)
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    # Verificar si el correo electrónico ya está registrado
    if get_user_by_email(email):
        return jsonify({'message': 'El correo electrónico ya está registrado'}), 400

    # Hash de la contraseña usando passlib
    hashed_password = pbkdf2_sha256.hash(password)

    # Guardar el usuario en la base de datos
    user_id = users_collection.insert_one({'name': name, 'email': email, 'password': hashed_password}).inserted_id

    # Generar tokens de acceso y refresh
    accessToken, refreshToken = generate_tokens(user_id)
    return jsonify({'body': {'accessToken': accessToken, 'refreshToken': refreshToken}})

# Ruta de inicio de sesión (login)
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    # Obtener el usuario de la base de datos por su correo electrónico
    user = get_user_by_email(email)
    if not user:
        return jsonify({'message': 'Credenciales inválidas'}), 401

    # Verificar la contraseña usando passlib
    if not pbkdf2_sha256.verify(password, user['password']):
        return jsonify({'message': 'Credenciales inválidas'}), 401

    # Generar tokens de acceso y refresh
    accessToken, refreshToken = generate_tokens(user['_id'])
    return jsonify({'body': {'accessToken': accessToken, 'refreshToken': refreshToken}})

# Ruta para refrescar el access token
@app.route('/refresh', methods=['POST'])
def refresh():
    refreshToken = request.json.get('refreshToken')

    try:
        payload = jwt.decode(refreshToken, current_app.config['SECRET_KEY'], algorithms=[ALGORITHM])
        if payload.get("type") != "refresh":
            return jsonify({'message': 'Invalid token type'}), 401
        user_id = payload.get('user_id')
        if not user_id:
            return jsonify({'message': 'Invalid token'}), 401
        accessToken = generate_access_token(user_id, expires_delta=timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
        return jsonify({'accessToken': accessToken})
    except jwt.ExpiredSignatureError:
        return jsonify({'message': 'Refresh token expired'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'message': 'Invalid refresh token'}), 401
    
# Ruta para obtener información del usuario
@app.route('/user', methods=['GET'])
def get_user_info():
    auth_header = request.headers.get('Authorization')
    if auth_header is None:
        return jsonify({'message': 'Missing authorization header'}), 401
    
    try:
        token = auth_header.split(" ")[1]
        payload = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=[ALGORITHM])
        user_id = payload.get('user_id')
        if not user_id:
            return jsonify({'message': 'Invalid token'}), 401

        user = users_collection.find_one({'_id': ObjectId(user_id)})
        if user is None:
            return jsonify({'message': 'User not found'}), 404
        
        user_info = {
            'id': str(user['_id']),
            'name': user['name'],
            'email': user['email']
        }
        return jsonify(user_info)
    except jwt.ExpiredSignatureError:
        return jsonify({'message': 'Token expired'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'message': 'Invalid token'}), 401

if __name__ == "__main__":
    app.run(debug=True)
