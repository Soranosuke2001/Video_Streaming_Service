# FROM python:latest

# WORKDIR /db_app

# COPY . .

# RUN pip install --no-cache-dir -r app/requirements.txt

# RUN python app/create_database.py

# EXPOSE 8100

# CMD ["python", "app/app.py"]

FROM python:latest

# Copy your application code and the script
WORKDIR /db_app
COPY ./app .
COPY wait-for-mysql.sh /wait-for-mysql.sh

# Make the script executable
RUN chmod +x /wait-for-mysql.sh

# Install dependencies (example)
RUN pip install --no-cache-dir -r app/requirements.txt

RUN python app/create_database.py

# Use the script as the entry point or command
ENTRYPOINT ["/wait-for-mysql.sh"]
CMD ["python", "app/app.py"]