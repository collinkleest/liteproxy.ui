FROM node:20

WORKDIR /usr/src/app

RUN npm install -g pnpm

RUN npm i -g serve

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3001

CMD [ "serve", "-p", "3001", "-s", "dist" ]