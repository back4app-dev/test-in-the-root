FROM node:18-alpine

RUN mkdir /root/app

WORKDIR /root/app

COPY . /root/app/

RUN npm install

EXPOSE 3030

CMD ["npm", "start"]
