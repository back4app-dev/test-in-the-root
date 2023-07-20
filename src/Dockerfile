FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

# Expose the port 3333 to allow connection to the container
EXPOSE 3333

RUN env

CMD npm start
