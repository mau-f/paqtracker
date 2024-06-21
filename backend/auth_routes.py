from flask import Blueprint, request, jsonify, current_app
from passlib.hash import pbkdf2_sha256
import jwt
from datetime import datetime, timedelta, timezone
from functools import wraps
from pymongo import MongoClient
from bson import ObjectId
from app.bd import users_collection

auth_bp = Blueprint('auth_bp', __name__)

SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
REFRESH_TOKEN_EXPIRE_DAYS = 7


# Función para obtener un usuario por su correo electrónico
def get_user_by_email(email):
    user = users_collection.find_one({'email': email})
    return user


# Función para obtener el token del encabezado
def get_token_from_header(headers):
    if headers and 'authorization' in headers:
        parted = headers['authorization'].split(" ")
        if len(parted) == 2:
            return parted[1]
        else:
            return None
    return None

# Funciones para verificar los tokens
def verify_access_token(token):
    try:
        return jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=[ALGORITHM])
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

def verify_refresh_token(token):
    try:
        return jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=[ALGORITHM])
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

# Decorador para autenticar la solicitud
def authenticate(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        token = get_token_from_header(request.headers)
        if token:
            decoded = verify_access_token(token)
            if decoded:
                request.user = decoded['user_id']
            else:
                return jsonify({"message": "Invalid or expired token"}), 401
        else:
            return jsonify({"message": "No token provided"}), 402
        return f(*args, **kwargs)
    return decorated_function

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

# Ruta de registro (signup)
@auth_bp.route('/signup', methods=['POST'])
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
@auth_bp.route('/login', methods=['POST'])
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
@auth_bp.route('/refresh', methods=['POST'])
def refresh():
    refresh_token = get_token_from_header(request.headers)
    if refresh_token:
        payload = verify_refresh_token(refresh_token)
        if payload and payload.get("type") == "refresh":
            user_id = payload['user_id']
            accessToken, refreshToken = generate_tokens(user_id)
            return jsonify({'body':{'accessToken': accessToken}}), 200
        else:
            return jsonify({'message': 'Invalid refresh token'}), 401
    else:
        return jsonify({'message': 'Refresh token not provided'}), 401
