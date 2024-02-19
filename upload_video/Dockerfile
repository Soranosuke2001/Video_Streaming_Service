FROM node:latest

WORKDIR /upload_video

COPY . .

RUN npm install --production

RUN npm build

EXPOSE 8200

CMD ["npm", "start"]
