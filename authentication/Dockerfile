FROM python:latest

WORKDIR /authentication

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8090

CMD ["python", "app.py"]
