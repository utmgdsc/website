#! /bin/sh

# check if modules exists
if [ -d "./node_modules" ]
then
rm -r "./node_modules"
fi

if [ -d "./frontend/node_modules" ]
then
rm -r "./frontend/node_modules"
fi

if [ -d "./backend/node_modules" ]
then
rm -r "./backend/node_modules"
fi

# install dependencies

npm install

node_modules/.bin/concurrently "npm --prefix ./frontend install" "npm --prefix ./backend install"