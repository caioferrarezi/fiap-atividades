FROM node:20.11.1-slim

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json ./package.json
COPY pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm

USER node

RUN pnpm install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["pnpm", "run", "dev"]
