FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

# The following line was commented out and replaced since the error message was 'dockerfile must expose a tcp port'
EXPOSE 3333

RUN env

CMD npm start
