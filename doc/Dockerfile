# reference: https://medium.com/mozilla-club-bbsr/dockerizing-a-mern-stack-web-application-ebf78babf136
#  Dockerfile for Node Express Backend

FROM node:16

# Create App Directory
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

CMD ["npm","start"]