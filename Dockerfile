FROM node:16-alpine AS builder

WORKDIR /usr/src

RUN npm i -g typescript ts-node

COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install

COPY . .

CMD ["npm", "run", "start"]