FROM node:10.16.1-alpine as build
WORKDIR /app
RUN apk add --no-cache make gcc g++ python
COPY . /app
COPY package.json ./
RUN npm run build

# deployment image
FROM node:10.16.1-alpine
LABEL name="pokemon-challenge"
LABEL description="docker image using productionized frontend code"
WORKDIR /app
COPY --from=build /app/build build
COPY runserver.js runserver.js
EXPOSE 9000
RUN npm install express
CMD ["node", "runserver.js"]
