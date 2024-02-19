FROM node:latest

WORKDIR /upload_video

COPY . .

RUN npm install 

RUN npm run build

EXPOSE 8200

CMD ["npm", "start"]
