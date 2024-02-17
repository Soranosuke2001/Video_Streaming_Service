from flask import Flask, request, jsonify
import yaml
from supabase import create_client, Client

app = Flask(__name__)

with open('app_conf.yml', 'r') as yamlfile:
  app_config = yaml.load(yamlfile, Loader=yaml.FullLoader)

supabase_url: str = app_config['supabase']['url']
supabase_key: str = app_config['supabase']['key']
supabase: Client = create_client(supabase_url, supabase_key)

@app.route('/login', methods=['POST'])
def login():
  username = request.form['username']
  password = request.form['password']
  data = supabase.table('Users').select("*").eq('username', username).execute()

  if request.method == 'POST':

    if len(data.data) == 0:
      return "No such user exists!", 400

    user = data.data[0]

    if user['password'] == password:
      return jsonify({"message": "Authentication successful!", "user_id": user['user_id']}), 202
    else:
      return "Invalid credentials!", 400

@app.route('/register', methods=['POST'])
def register():
  username = request.form['username']
  password = request.form['password']
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

  app.run(debug=True, port=app_config['app']['port'], host=app_config['app']['host'])
