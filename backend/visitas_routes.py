from flask import Blueprint, jsonify
from app.bd import visitas_collection

visitas_bp = Blueprint('visitas_bp', __name__)

@visitas_bp.route('/visitas', methods=['GET'])
def obtener_visitas():
    visitas = visitas_collection.find()
    resultado = []
    for visita in visitas:
        visita['_id'] = str(visita['_id'])  # Convertir ObjectId a string
        resultado.append(visita)
    return jsonify(resultado)
