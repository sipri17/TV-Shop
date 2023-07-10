FROM node:18.16

WORKDIR /usr/local/app

ENV PORT=3000

COPY package.json package-lock.json ./

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./ 

RUN sequelize db:create
RUN sequelize db:migrate
RUN sequelize db:seed:all

CMD ["npm","run","start"]