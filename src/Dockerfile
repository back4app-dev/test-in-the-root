FROM node:18-alpine

ARG HELLO

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

RUN echo "MY_VARIABLE: $HELLO"

# Execute the shell script during the build process
RUN sudo /root/app/print_env.sh

EXPOSE 3333

CMD npm start
