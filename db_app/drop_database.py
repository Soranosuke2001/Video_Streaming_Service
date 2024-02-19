import mysql.connector

from read_config import database_config

user, password, hostname, port, db = database_config()

connection = mysql.connector.connect(host=hostname, user=user, password=password)

c = connection.cursor()

c.execute(f"DROP DATABASE IF EXISTS {db}")

connection.commit()
connection.close()
