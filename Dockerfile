FROM node:18-alpine

WORKDIR /incubyte/

COPY public/ /incubyte/public
COPY src/ /incubyte/src
COPY package.json /incubyte/

RUN npm install

CMD ["npm", "start"]
