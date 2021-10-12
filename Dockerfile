FROM node:12 as dev

WORKDIR /app

COPY . .

RUN npm install

FROM node:12 as build_prod

ENV API_URL=https://bot.netsoc.co
ENV ENABLE_EVENTS_BANNER=true

WORKDIR /app

RUN apt update && apt-get -y install gconf-service libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxss1 libxtst6 libappindicator1 libnss3 libasound2 libatk1.0-0 libc6 ca-certificates fonts-liberation lsb-release xdg-utils wget

COPY --from=dev /app .

RUN npm run build

FROM nginx:latest as prod

RUN ln -s /app /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

COPY --from=build_prod /app/dist .

COPY default.conf /etc/nginx/conf.d/default.conf

LABEL maintainer="netsoc@uccsocieties.ie"
