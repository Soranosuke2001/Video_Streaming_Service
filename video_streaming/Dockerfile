FROM node:latest

WORKDIR /video_streaming

COPY . .

RUN npm install --production

RUN npm build

EXPOSE 4000

CMD ["npm", "start"]
