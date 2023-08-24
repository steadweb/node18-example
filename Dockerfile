FROM node:18-alpine

WORKDIR /usr/src/app

COPY index.js .

EXPOSE 3000

CMD [ "node", "index.js" ]