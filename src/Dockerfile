
FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORK /root/appDIR

COPY * /root/app/

RUN npm install

# Expose the port 3333 to allow connection to the container
# Dockerfile must expose a TCP port, so the line below is commented out and a new line is added with the correct EXPOSE command
# EXPOSE 3333
EXPOSE 3333/tcp

RUN env

CMD npm start
