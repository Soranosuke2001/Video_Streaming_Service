#!/bin/bash

# Wait-for-it.sh script or similar logic can be used
# Replace `db` with your MySQL service name and `3306` with the port if different
# Replace `MYSQL_USER` and `MYSQL_PASSWORD` with your actual credentials

set -e

host="mysql_db"
port="3306"
user="sora"
pass="sora"

until mysql -h "$host" -P "$port" -u"$user" -p"$pass" -e 'SELECT 1'; do
  >&2 echo "MySQL is unavailable - sleeping"
  sleep 1
done

>&2 echo "MySQL is up - executing command"
exec "$@"