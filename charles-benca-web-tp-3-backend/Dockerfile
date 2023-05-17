FROM node:18-alpine
WORKDIR /app
RUN apk add openssl

COPY ./package.json ./package-lock.json ./main.js ./.env ./
RUN npm install
COPY ./routes ./routes
COPY ./controllers ./controllers
COPY ./models ./models
COPY ./ssl ./ssl

WORKDIR /app/ssl
RUN sh ./regen.sh


WORKDIR /app

CMD ["npm", "run", "start"]