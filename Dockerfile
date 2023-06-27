# reference: https://medium.com/mozilla-club-bbsr/dockerizing-a-mern-stack-web-application-ebf78babf136
# Dockerfile for React client

# Build react client
FROM node:16

# Working directory be app
WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]
