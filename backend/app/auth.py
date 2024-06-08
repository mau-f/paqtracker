from flask import Blueprint, request, jsonify, current_app
from passlib.hash import pbkdf2_sha256
import jwt
from run import app
from app.bd import users_collection

auth_bp = Blueprint('auth', __name__)



# Función de generación de token
def generate_access_token(user_id):
    return jwt.encode({'user_id': str(user_id)}, current_app.config['SECRET_KEY'], algorithm='HS256')

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

    # Generar token de acceso
    access_token = generate_access_token(user_id)
    return jsonify({'access_token': access_token})

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

    # Generar token de acceso
    access_token = generate_access_token(user['_id'])
    return jsonify({'access_token': access_token})


# from pymongo import MongoClient

# MONGO_URI = 'mongodb://localhost'

# client = MongoClient(MONGO_URI)

# db = client['test']
# collection = db['users']

# collection.insert_one({"nombre": "Juan", "contraseña":"hola" })

# results = collection.find()

# for r in results:
#     print(r['nombre'])