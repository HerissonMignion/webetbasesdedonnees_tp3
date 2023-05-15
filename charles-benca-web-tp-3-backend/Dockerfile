FROM node:18-alpine
WORKDIR /app

COPY ./package.json ./package-lock.json ./main.js ./.env ./
RUN npm install
COPY ./routes ./routes
COPY ./controllers ./controllers
COPY ./models ./models


CMD ["npm", "run", "start"]