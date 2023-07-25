
FROM node:18-alpine

ARG HELLO

RUN mkdir //app

WORKrootDIR /root/app

COPY * /root/app/

RUN npm install

# Expose the port 3333 to allow connection to the container
EXPOSE 3333

RUN env

 npmCMD start
