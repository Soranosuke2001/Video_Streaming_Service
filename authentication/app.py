from flask import Flask, request, jsonify
from flask_cors import cross_origin
import yaml
from supabase import create_client, Client

app = Flask(__name__)

with open('app_conf.yml', 'r') as yamlfile:
  app_config = yaml.load(yamlfile, Loader=yaml.FullLoader)

origins = app_config['cors']['origin']
supabase_url: str = app_config['supabase']['url']
supabase_key: str = app_config['supabase']['key']
supabase: Client = create_client(supabase_url, supabase_key)

@app.route('/login', methods=['POST'])
@cross_origin(origins=origins, supports_credentials=True)
def login():
  data = request.json

  username = data.get('username')
  password = data.get('password')

  result = supabase.table('Users').select("*").eq('username', username).execute()

  if request.method == 'POST':

    if len(result.data) == 0:
      return "No such user exists!", 400

    user = result.data[0]

    if user['password'] == password:
      response = {
        "message": "Authentication successful!",
        "login": "validated",
        "user_id": user['user_id'],
        "username": user['username']
      }
      return jsonify(response), 202
    else:
      return "Invalid credentials!", 404

@app.route('/register', methods=['POST'])
@cross_origin(origins=origins)
def register():
  data = request.json

  username = data.get('username')
  password = data.get('password')

  data = supabase.table('Users').select("*").eq('username', username).execute()

  if request.method == 'POST':
    if len(data.data) > 0:
      return "User already exists!", 400

    new_user = supabase.table('Users').insert({
      'username': username, 
      'password': password
      }).execute()

    return jsonify({"message": "User is created!", "user_id": new_user.data[0]['user_id']}), 201

if __name__ == '__main__':

  app.run(port=app_config['app']['port'], host=app_config['app']['host'])
