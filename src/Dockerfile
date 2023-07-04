FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

RUN env

# Added to expose port 8080 as specified in the error message
EXPOSE 8080

CMD npm start
