FROM node:12 as dev

WORKDIR /app

COPY . .

RUN npm install

FROM node:12 as build_prod

ENV API_URL=https://events.netsoc.dev

WORKDIR /app

COPY --from=dev /app .

RUN npm run build

FROM nginx:latest as prod

RUN ln -s /app /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

COPY --from=build_prod /app/dist .

LABEL maintainer="netsoc@uccsocieties.ie"
