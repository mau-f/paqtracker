from flask import Blueprint, jsonify, request
from app.bd import visitas_collection
from datetime import datetime, timedelta, timezone

visitas_bp = Blueprint('visitas_bp', __name__)

@visitas_bp.route('/visitas', methods=['GET'])
def obtener_visitas():
    visitas = visitas_collection.find()
    resultado = []
    for visita in visitas:
        visita['_id'] = str(visita['_id'])  # Convertir ObjectId a string
        resultado.append(visita)
    return jsonify(resultado)

@visitas_bp.route('/newVisit', methods=['POST'])
def add_visit():
    data = request.json
    name = data.get('name')
    frequent = data.get('frequent')
    rut = data.get('rut')
    parking = data.get('parking')
    entry_time = data.get('entry_time')
    fecha = data.get('fecha')  
    timestamp = datetime.now(timezone.utc)

    visit = {
        'name': name,
        'fecha': fecha,
        'frequent': frequent,
        'rut': rut,
        'parking': parking,
        'entry_time': entry_time,
        'timestamp': timestamp
    }

    result = visitas_collection.insert_one(visit)
    
    

    if result.inserted_id:

        return jsonify({'message': 'Visit added successfully', 'visit_id': str(result.inserted_id)}), 201
    else:
        return jsonify({'message': 'Failed to add visit'}), 500

