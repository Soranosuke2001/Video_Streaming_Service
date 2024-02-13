FROM python:3.11

USER root

WORKDIR /usr/src/app
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt
COPY . .

CMD []