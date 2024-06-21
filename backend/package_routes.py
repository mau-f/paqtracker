from flask import Blueprint, jsonify, request
from app.bd import package_colecction
from datetime import datetime, timedelta, timezone

package_bp = Blueprint('package_bp', __name__)

@package_bp.route('/packages', methods=['GET'])
def obtener_package():
    packages = package_colecction.find()
    resultado = []
    for package in packages:
        package['_id'] = str(package['_id'])  # Convertir ObjectId a string
        resultado.append(package)
    return jsonify(resultado)

@package_bp.route('/newPackage', methods=['POST'])
def add_visit():
    data = request.json
    name = data.get('name')
    depto = data.get('depto')
    fecha = data.get('fecha')
    destinatario = data.get('destinatario')
    timestamp = datetime.now(timezone.utc)

    package = {
        'name': name,
        'fecha': fecha,
        'depto': depto,
        'destinatario': destinatario,
        'timestamp': timestamp
    }

    result = package_colecction.insert_one(package)
    
    if result.inserted_id:
        return jsonify({'message': 'Visit added successfully', 'visit_id': str(result.inserted_id)}), 201
    else:
        return jsonify({'message': 'Failed to add visit'}), 500

