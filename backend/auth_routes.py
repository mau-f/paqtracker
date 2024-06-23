from flask import Blueprint, request, jsonify, current_app
from passlib.hash import pbkdf2_sha256
import jwt
from datetime import datetime, timedelta, timezone
from functools import wraps
from pymongo import MongoClient
from bson import ObjectId
from app.bd import users_collection, refresh_tokens_collection

auth_bp = Blueprint('auth_bp', __name__)

SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
REFRESH_TOKEN_EXPIRE_DAYS = 7

class RefreshToken:
    def __init__(self, user_id, token):
        self.user_id = user_id
        self.token = token

def insert_refresh_token(refresh_token):
    token_dict = {"user_id": str(refresh_token.user_id), "token": refresh_token.token}
    result = refresh_tokens_collection.insert_one(token_dict)
    return result.inserted_id

def update_refresh_token(refresh_token):
    result = refresh_tokens_collection.update_one(
        {"user_id": str(refresh_token.user_id)},
        {"$set": {"token": refresh_token.token}},
        upsert=True
    )
    return result.modified_count > 0

def get_refresh_token(user_id):
    return refresh_tokens_collection.find_one({"user_id": user_id})

def delete_refresh_token(user_id):
    try:
        result = refresh_tokens_collection.delete_one({"user_id": str(user_id)})
        if result.deleted_count == 1:
            return True
        else:
            return False
    except Exception as e:
        current_app.logger.error(f"Error deleting refresh token for user {user_id}: {e}")
        return False

def get_user_by_email(email):
    user = users_collection.find_one({'email': email})
    return user

def get_token_from_header(headers):
    if headers and 'authorization' in headers:
        parted = headers['authorization'].split(" ")
        if len(parted) == 2:
            return parted[1]
        else:
            return None
    return None

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

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if get_user_by_email(email):
        return jsonify({'message': 'El correo electrónico ya está registrado'}), 400

    hashed_password = pbkdf2_sha256.hash(password)
    user_id = users_collection.insert_one({'name': name, 'email': email, 'password': hashed_password}).inserted_id

    accessToken, refreshToken = generate_tokens(user_id)
    refresh_token_instance = RefreshToken(user_id=user_id, token=refreshToken)
    insert_refresh_token(refresh_token_instance)
    return jsonify({'body': {'accessToken': accessToken, 'refreshToken': refreshToken}})

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = get_user_by_email(email)
    if not user:
        return jsonify({'message': 'Credenciales inválidas'}), 401

    if not pbkdf2_sha256.verify(password, user['password']):
        return jsonify({'message': 'Credenciales inválidas'}), 401

    accessToken, refreshToken = generate_tokens(user['_id'])
    refresh_token_instance = RefreshToken(user_id=user['_id'], token=refreshToken)
    update_refresh_token(refresh_token_instance)
    return jsonify({'body': {'accessToken': accessToken, 'refreshToken': refreshToken}})

@auth_bp.route('/refresh', methods=['POST'])
def refresh():
    refresh_token = get_token_from_header(request.headers)
    if not refresh_token:
        return jsonify({'message': 'Token de refresco no proporcionado'}), 403

    payload = verify_refresh_token(refresh_token)
    if not payload or payload.get("type") != "refresh":
        return jsonify({'message': 'Token de refresco inválido'}), 402

    user_id = payload['user_id']
    stored_refresh_token = get_refresh_token(user_id)
    print(stored_refresh_token)
    print(refresh_token)
    if stored_refresh_token and stored_refresh_token['token'] == refresh_token:
        accessToken, new_refreshToken = generate_tokens(user_id)
        # refresh_token_instance = RefreshToken(user_id=user_id, token=new_refreshToken)
        # update_refresh_token(refresh_token_instance)
        return jsonify({'body': {'accessToken': accessToken, 'refreshToken': new_refreshToken}}), 200
    else:
        return jsonify({'message': 'Token de refresco inválido'}), 401


@auth_bp.route('/signout', methods=['DELETE'])
@authenticate
def signout():
    user_id = request.user
    if delete_refresh_token(user_id):
        return jsonify({'message': 'Sesión cerrada correctamente'}), 200
    else:
        return jsonify({'message': 'Error al cerrar sesión'}), 500