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
" > ./website/docker-compose.override.yml
fi

bash -c "./dev-env up website discord-bot"
