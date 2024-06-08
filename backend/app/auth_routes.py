# from flask import jsonify, request
# from run import app
# from app.auth import signup, login, get_user_by_email



# # Ruta para obtener el nombre de usuario
# @app.route('/user', methods=['GET'])
# def get_user():
#     # Obtenemos el correo electrónico del usuario desde la solicitud
#     email = request.args.get('email')

#     # Buscamos el usuario en la base de datos
#     user = get_user_by_email(email)

#     # Verificamos si el usuario existe
#     if user:
#         return jsonify({'username': user['username']}), 200
#     else:
#         return jsonify({'message': 'User not found'}), 404

# # Rutas de autenticación
# app.add_url_rule('/signup', 'signup', signup, methods=['POST'])
# app.add_url_rule('/login', 'login', login, methods=['POST'])


# # Manejo de favicon
# @app.route('/favicon.ico')
# def favicon():
#     # Aquí puedes devolver el archivo de favicon si lo tienes
#     return jsonify(message="Favicon no encontrado"), 404