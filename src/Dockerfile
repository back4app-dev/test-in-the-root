FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

RUN echo $HELLO

EXPOSE 3333

CMD npm start
