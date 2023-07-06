FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

EXPOSE 3333/TCP

RUN env

CMD npm start
