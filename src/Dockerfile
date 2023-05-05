FROM node:18-alpine

RUN mkdir /root/app

WORKDIR /root/app

COPY * /root/app/

RUN npm install

RUN echo "MY_VARIABLE: $HELLO"

# Execute the shell script during the build process
RUN /root/app/print_env.sh

EXPOSE 3333

CMD npm start
