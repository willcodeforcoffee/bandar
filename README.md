# Bandar

A local webserver. Something I can easily run on a personal website.

## Running in Production

### Step 1. Build the Application Docker images

First you have to build the Application Docker image:

```
docker build --tag bandar:1.1.0 --tag bandar:latest .
```

Second you have to build the Proxy Docker image

```
docker build --file config/docker/proxy/Dockerfile --tag bandar-proxy:1.1.0 --tag bandar-proxy:latest .
```

### Step 2. Setup the Environment variables

Anything you aren't passing from the environment should be loaded into `.env.production.local`. Most settings are documented in `.env` also.

- [Pushover](https://pushover.net/) is used to send app notifications
- SMTP is used to send email

### Step 3. Docker Compose to run all services

To run everything use the production compose:

```
docker-compose -f docker-compose.yml -f config/docker/docker-compose.yml up --detach
```

## Stopping in Production

```
docker-compose -f docker-compose.yml -f config/docker/docker-compose.yml down
```
