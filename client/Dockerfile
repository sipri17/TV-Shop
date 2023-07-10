FROM node:18.16

WORKDIR /usr/local/app

ENV PORT=5173

COPY package.json package-lock.json ./

RUN npm install && npm cache clean --force

RUN npm install -g http-server

COPY ./ ./ 

RUN npm run build

CMD ["http-server","dist"]