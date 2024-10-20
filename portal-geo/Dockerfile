# Use uma imagem base do Node.js
FROM node:20.15.1-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm install
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
