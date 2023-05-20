FROM node:18-alpine
WORKDIR /app
RUN apk add openssl
RUN npm install --global serve

COPY ./package.json ./package-lock.json ./
RUN npm ci
COPY ./public ./public
COPY ./src ./src
COPY ./ssl ./ssl

WORKDIR /app/ssl
RUN sh ./regen.sh


WORKDIR /app
RUN npm run build

CMD ["serve", "-s", "build"]
#CMD ["serve", "--cors", "-s", "build", "--ssl-cert", "ssl/server.cert", "--ssl-key", "ssl/server.key"]
