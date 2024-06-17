from pymongo import MongoClient
import certifi

usuario="mauricioignacio"
password="umPr4FqMLIKbdlcn"


client = MongoClient('mongodb+srv://mauricioignacio:umPr4FqMLIKbdlcn@cluster0.1vitu7g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', tlsCAFile=certifi.where())

db = client['paqtracker']
users_collection = db['users']
visitas_collection = db['visitas']

# users_collection.insert_one({"nombre": "Juan", "contraseña":"hola" })

