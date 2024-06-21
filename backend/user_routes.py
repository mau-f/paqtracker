from flask import Blueprint, jsonify, request
from bson import ObjectId
from app.bd import users_collection
from auth_routes import authenticate

user_bp = Blueprint('user_bp', __name__)

# Ruta para obtener información del usuario
@user_bp.route('/user', methods=['GET'])
@authenticate
def get_user():
    user_id = request.user
    user = users_collection.find_one({'_id': ObjectId(user_id)}, {'password': 0})  # Excluir la contraseña de la respuesta
    if user:
        # Convertir ObjectId a cadena
        user['_id'] = str(user['_id'])
        return jsonify(user), 200
    else:
        return jsonify({'message': 'User not found'}), 404
