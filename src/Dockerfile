FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

# EXPOSE 3333
# Change the commented line to expose port 3333
EXPOSE 3333

RUN env

CMD npm start