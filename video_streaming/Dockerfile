FROM node:latest

WORKDIR /video_streaming

COPY . .

RUN npm install --omit=dev

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]
