FROM nginx
LABEL maintainer="netsoc@uccsocieties.ie"

COPY . /usr/share/nginx/html
