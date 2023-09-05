FROM node:18-alpine

RUN mkdir /root/app

WORKDIR /root/app

COPY ./src /root/app/

RUN npm install

EXPOSE 3333

CMD ["npm", "start"]
