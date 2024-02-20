import mysql.connector

from read_config import database_config

user, password, hostname, port, db = database_config()

connected = False

while not connected:
    try:
        connection = mysql.connector.connect(host=hostname, user=user, password=password, database=db)
        connected = True
    except:
        continue

c = connection.cursor()

create_table1 = '''
                CREATE TABLE IF NOT EXISTS video_links
                (
                    id INT NOT NULL AUTO_INCREMENT,
                    user_id VARCHAR(250) NOT NULL,
                    username VARCHAR(250) NOT NULL,
                    video_id VARCHAR(250) NOT NULL,
                    video_title VARCHAR(250) NOT NULL,
                    video_link VARCHAR(100) NOT NULL,
                    date_created DATETIME NOT NULL,
                    CONSTRAINT gun_stat_pk PRIMARY KEY (id)
                )
                '''

c.execute(create_table1)

connection.commit()
connection.close()
