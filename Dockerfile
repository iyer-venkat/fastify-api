FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

# RUN npm i -g pm2

ENV PORT=3000
ENV NODE_ENV production

EXPOSE 3000

CMD ["yarn", "dev"]
# CMD ["pm2-runtime", "index.js"]