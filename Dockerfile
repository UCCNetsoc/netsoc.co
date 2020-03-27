FROM node:13-alpine as build
LABEL maintainer="netsoc@uccsocieties.co"

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:latest
RUN ln -s /app /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
