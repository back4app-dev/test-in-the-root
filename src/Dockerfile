FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY . /root/app/

RUN npm install

EXPOSE 8282

RUN printenv

CMD npm start
