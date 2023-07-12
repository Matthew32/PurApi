FROM node:14.16.0-alpine3.10
WORKDIR /usr/app/src
RUN npm install -g typescript
RUN npm install -g ts-node
RUN npm install
EXPOSE 3000
CMD npm install && npm run dev
