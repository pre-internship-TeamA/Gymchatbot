from flask import Flask, jsonify
import os
from pymongo import MongoClient

app = Flask(__name__)
MONGO_HOST = 'mongodb'
MONGO_PORT = 27017
MONGO_USER = 'root'
MONGO_PASS = 'pass'
MONGO_URI = 'mongodb://{}:{}@{}:{}/{}?authSource={}'.format(
    MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_PORT, 'animal_db', 'admin')


def get_db():
    client = MongoClient(MONGO_URI)
    db = client["animal_db"]
    return db

@app.route('/')
def ping_server():
    return "Welcome to the world of animals."

@app.route('/animals')
def get_stored_animals():
    db = get_db()
    _animals = db.animal_tb.find()
    animals = [{"id": animal["id"], "name": animal["name"], "type": animal["type"]} for animal in _animals]
    return jsonify({"animals": animals})

if __name__=='__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)