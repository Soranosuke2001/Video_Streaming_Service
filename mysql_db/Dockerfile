FROM python:latest

WORKDIR /db_app

COPY . .

RUN pip install --no-cache-dir -r app/requirements.txt

RUN python app/create_database.py

EXPOSE 8100

CMD ["python", "app/app.py"]
