FROM node:20.10.0-alpine

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/package.json
COPY ./build/index.js /usr/src/app/index.js

RUN npm i --production
RUN apk add curl

EXPOSE 4000

CMD ["node", "index.js"]