#!/bin/bash

if [[ $# -eq 0 ]] ; then
    echo 'Must provide path to dev-env. For example: ./start-dev.sh ../dev-env'
    exit 1
fi

if [ ! -d "./node_modules" ]; then
    npm install
fi

WD=`pwd`
cd $1

if [ ! -f "./website/docker-compose.override.yml" ]; then
	echo "version: \"3.7\" 
services:
  website:
    volumes:
      - ${WD}:/app
    environment:
      - API_URL=http://discord-bot.netsoc.local
" > ./website/docker-compose.override.yml
fi

if [[ $# -eq 2 ]] ; then
    if [[ $2 == 'bot' ]] ; then
      sed -i "s/API_URL=.*/API_URL=https:\/\/events.netsoc.dev/g" ./website/docker-compose.override.yml
      bash -c "./dev-env up website discord-bot"
    fi
    exit 0
fi
sed -i "s/API_URL=.*/API_URL=http:\/\/discord-bot.netsoc.local/g" ./website/docker-compose.override.yml
bash -c "./dev-env up website"
