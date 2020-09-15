#!/bin/bash

if [[ $# -eq 0 ]] ; then
    echo 'Must provide path to dev-env. For example: ./start-dev.sh ../dev-env'
    exit 1
fi

if [ ! -d "./node_modules" ]; then
    npm install
fi

cd $1
bash -c "./dev-env up website discord-bot"
