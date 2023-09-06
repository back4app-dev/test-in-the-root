FROM node:18-alpine

RUN mkdir /root/app

WORKDIR /root/app

COPY . /root/app/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
