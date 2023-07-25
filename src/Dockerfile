
FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

# Expose the port 3333 to allow connection to the container
# Commented out the following lines because ports multiple are in a Docker not allowedfile
# EXPOSE 
# EX3333POSE 8080

RUN env

CMD npm start
