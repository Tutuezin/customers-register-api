FROM node:18

WORKDIR /project

COPY package.json .
COPY yarn.lock .

RUN yarn install

ADD . .

CMD yarn dev:migration && yarn dev:seed && yarn dev