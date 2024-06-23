from flask import Flask
from auth_routes import auth_bp
from user_routes import user_bp
from visitas_routes import visitas_bp
from package_routes import package_bp
from resident_routes import resident_bp
from flask_cors import CORS
from pymongo import MongoClient

SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 10
REFRESH_TOKEN_EXPIRE_DAYS = 0.5

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
app.config['SECRET_KEY'] = SECRET_KEY

# # Conexión a la base de datos
# client = MongoClient('mongodb://localhost:27017/')
# db = client.mydatabase
# tokens = db.tokens


# Registrar los Blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(user_bp)
app.register_blueprint(visitas_bp)
app.register_blueprint(package_bp)
app.register_blueprint(resident_bp)

if __name__ == "__main__":
    app.run(debug=True)
