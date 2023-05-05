FROM node:18-alpine

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

RUN env

EXPOSE 3333

CMD npm start
