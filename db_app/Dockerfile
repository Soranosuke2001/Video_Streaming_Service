FROM python:latest

# Copy your application code and the script
WORKDIR /db_app
COPY . .

# Install dependencies (example)
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8100

CMD python create_database.py && python app.py
