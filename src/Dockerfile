FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

RUN env

EXPOSE 8080 # Added line to expose port 8080

CMD npm start # Added line to set command to start npm
