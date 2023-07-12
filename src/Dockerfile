FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

# EXPOSE 3333 (Removed this line to fix error)
EXPOSE 3333    #Added this line to expose port 3333

RUN env

CMD npm start
