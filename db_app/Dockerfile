FROM python:latest

WORKDIR /db_app
COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8100

CMD python create_database.py && python app.py
