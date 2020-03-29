FROM node:13 as build

WORKDIR /app

COPY . .

RUN npm install && npm rebuild && npm run build

FROM nginx:latest

RUN ln -s /app /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist .

LABEL maintainer="netsoc@uccsocieties.co"
