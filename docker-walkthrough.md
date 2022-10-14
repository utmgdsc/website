## How to Develop Under This Structure

Same as before, to run server and client

```sh
npm start
```

It is always good to have the DB on as well, you can see the steps [here](#run-db-only)


## Changes

Since we changed the file architecture, we have had isolated environment for our server.

The connection is established by the ```client:links``` in [docker-compose.yml](./docker-compose.yml).

To see the source code, [here](https://github.com/docker/awesome-compose/tree/master/react-express-mongodb)

## Prerequisites

* Ensure [Node.js](https://nodejs.org/en/) is installed locally

* Download [Docker Desktop](https://docs.docker.com/get-docker/) (recommended), or download Docker Engine.

## Run Whole App

Before runing the following command, please change one line in `/frontend/package.json`.

Change `"proxy": "http://127.0.0.1:5000"` to `proxy": "http://server:5000"`.

Run the following in root directory
```sh
docker-compose build
```
To start the application
```sh
docker-compose up -d
```
To stop and remove container
```sh
docker-compose down
```

## Run DB only

At root directory, build and run compose file

```sh
docker-compose -f docker-compose.dev.yml up -d --build
```

Then, enable Mongo Shell

```sh
docker exec -it mongo bash
```

In the shell, connect to our mongodb server by 

```sh
mongo "${MONGODB_URL}"
```

Now you can manipulate data and anything with mongoDB here.

<strong>Sooooo, why do we need to run MongoDB this way?</strong>

It isolated the mongo from your computer environment and force you to run the same version of mongo as the application to ensure consistentcy of app. Good for testing too.

For now, when only mongo is dockerized, you can view docker as a VM.

## Run Back-end Only
Make sure you are in ```/backend```
```sh
docker build -t server .
```
```sh
docker run -p 5000:5000 server
```
<strong>Notice</strong>: ```Contrl+C``` won't be able to kill the program. If you want to stop it, please see [Trouble Shooting](#trouble-shooting)

## Run Back-end Only
Make sure you are in ```/frontend```
```sh
docker build -t react-app .
```
```sh
docker run -p 3000:3000 react-app
```
<strong>Notice</strong>: ```Contrl+C``` won't be able to kill the program. If you want to stop it, please see [Trouble Shooting](#trouble-shooting)

## After Build

Images will appear in your docker.

To view all images you have
```sh
docker image ls
```
## Trouble Shooting

All of the below can be done in Docker Desktop.

### Kill a running container

Get running container ID
```sh
docker ps
```
Kill by ID
```sh
docker kill {Container ID}
```

### Remove all containers (including idle container)

```sh
docker rm `docker ps -a -q`
```

### Remove Image

Get list of IMAGES
```sh
docker image ls
```
Remove unused IMAGES by ID
```sh
docker image rm [-f] {Image ID}
```