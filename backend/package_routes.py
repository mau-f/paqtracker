from flask import Blueprint, jsonify, request
from app.bd import package_colecction
from datetime import datetime, timedelta, timezone
from app.bd import resident_colecction

package_bp = Blueprint('package_bp', __name__)

import requests
import time

def phone_residente(depto):
    resident = resident_colecction.find_one({"depto": depto})
    resident_phone = resident['phone']
    return resident_phone

def sendMessage(para, mensaje):
    url = 'http://localhost:3001/lead'

    data = {
        "message": mensaje,
        "phone": para
    }
    headers = {
        'content-type':'application/json'
    }
    print(data)
    response = requests.post(url, json=data, headers=headers)
    time.sleep(10)
    return response
# +56 9 3722 3157


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

    resident_phone = phone_residente(depto)

    sendMessage(resident_phone, 'Hola, tu paquete ha llegado a la recepción. Ven a retirarlo.')


    
    if result.inserted_id:
        return jsonify({'message': 'Visit added successfully', 'visit_id': str(result.inserted_id)}), 201
    else:
        return jsonify({'message': 'Failed to add visit'}), 500

