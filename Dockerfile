FROM node:12 as build

ENV API_URL=https://events.netsoc.dev

WORKDIR /app

COPY . .

RUN npm install && npm rebuild && npm run build

FROM nginx:latest

RUN ln -s /app /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist .

COPY nginx.conf /etc/nginx/nginx.conf

LABEL maintainer="netsoc@uccsocieties.ie"
