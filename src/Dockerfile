FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

RUN env

# Expose port 3000 to allow access to the application
EXPOSE 3000

CMD npm start
