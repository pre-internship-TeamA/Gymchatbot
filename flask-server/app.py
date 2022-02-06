from flask import Flask, render_template
from flask_pymongo import PyMongo
from dotenv import load_dotenv
import os

load_dotenv()
user_id=os.getenv('USER_ID')
user_pwd=os.getenv('USER_PWD')
mongo = PyMongo()

app = Flask(__name__)
app.config['MONGO_URI']=f'mongodb+srv://{user_id}:{user_pwd}@cluster0.wfwbi.mongodb.net/gymdb?retryWrites=true&w=majority'

mongo.init_app(app)
#database
gymdb= mongo.db.gymdb
@app.route('/')
def main():
  context = gymdb.find()
  return render_template("gym.html", context=context)

if __name__ == '__main__':
  app.run(debug=True)

