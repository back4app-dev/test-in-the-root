FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

RUN env

EXPOSE 3000 # Added line to expose a TCP port

CMD npm start
