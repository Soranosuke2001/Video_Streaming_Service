import mysql.connector

from helpers.read_config import database_config

user, password, hostname, port, db = database_config()

connection = mysql.connector.connect(host=hostname, user=user, password=password)

c = connection.cursor()

c.execute(f"CREATE DATABASE IF NOT EXISTS {db}")

connection.commit()
connection.close()

connection = mysql.connector.connect(host=hostname, user=user, password=password, database=db)

c = connection.cursor()

create_table1 = '''
                CREATE TABLE video_links
                (
                    id INT NOT NULL AUTO_INCREMENT,
                    user_id VARCHAR(250) NOT NULL,
                    video_id VARCHAR(250) NOT NULL,
                    video_link VARCHAR(100) NOT NULL,
                    date_created DATETIME NOT NULL,
                    CONSTRAINT gun_stat_pk PRIMARY KEY (id)
                )
                '''

c.execute(create_table1)

connection.commit()
connection.close()
