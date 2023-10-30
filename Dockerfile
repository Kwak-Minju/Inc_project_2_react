FROM node:18-alpine

WORKDIR /usr/src/board-app

COPY . .

RUN npm install

CMD [ "npm", "start"]

EXPOSE 3000