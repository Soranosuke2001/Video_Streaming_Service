FROM python:latest

# Copy your application code and the script
WORKDIR /db_app
COPY . .
COPY wait-for-mysql.sh /wait-for-mysql.sh

# Make the script executable
RUN chmod +x /wait-for-mysql.sh

# Install dependencies (example)
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8100

CMD python create_database.py && python app.py