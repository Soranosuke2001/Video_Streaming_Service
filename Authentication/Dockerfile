FROM python:latest

WORKDIR /Authentication

COPY . .

RUN pip install --no-cache-dir -r server/requirements.txt

EXPOSE 8090

CMD ["python", "server/app.py"]
