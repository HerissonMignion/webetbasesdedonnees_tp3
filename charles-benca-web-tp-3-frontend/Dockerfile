FROM node:18-alpine
WORKDIR /app
RUN npm install --global serve

COPY ./package.json ./package-lock.json ./
RUN npm ci
COPY ./public ./public
COPY ./src ./src

RUN npm run build

CMD ["serve", "-s", "build"]
