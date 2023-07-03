FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

RUN env

# Expose the port that the application will use
EXPOSE 3000

CMD npm start