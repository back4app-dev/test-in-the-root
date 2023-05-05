FROM node:18-alpine

ARG HELLO

RUN ECHO HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

EXPOSE 3333

CMD npm start
