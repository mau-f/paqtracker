from flask import Blueprint, jsonify, request
from app.bd import resident_colecction
from datetime import datetime, timedelta, timezone

resident_bp = Blueprint('resident_bp', __name__)

@resident_bp.route('/residents', methods=['GET'])
def obtener_package():
    residents = resident_colecction.find()
    resultado = []
    for resident in residents:
        resident['_id'] = str(resident['_id'])  # Convertir ObjectId a string
        resultado.append(resident)
    return jsonify(resultado)

@resident_bp.route('/newResident', methods=['POST'])
def add_visit():
    data = request.json
    name = data.get('name')
    depto = data.get('depto')
    phone = data.get('phone')
    email = data.get('email')
    timestamp = datetime.now(timezone.utc)

    resident = {
        'name': name,
        'depto': depto,
        'phone': phone,
        'email': email,
        'timestamp': timestamp
    }

    result = resident_colecction.insert_one(resident)
    
    if result.inserted_id:
        return jsonify({'message': 'Visit added successfully', 'visit_id': str(result.inserted_id)}), 201
    else:
        return jsonify({'message': 'Failed to add visit'}), 500

