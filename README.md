# Bandar

A local webserver. Something I can easily run on a personal website.

## Running in Production

### Step 1. Build the Docker image

First you have to build the Docker image

```
docker build .
```

### Step 2. Setup the Environment variables

Anything you aren't passing from the environment should be loaded into `.env.production.local`

- [Pushover](https://pushover.net/) is used to send app notifications
- SMTP is used to send email

### Step 3. Docker Compose to run all services

To run everything use the production compose:

```
docker-compose --detach -f docker-compose.yml -f config/docker/docker-compose.yml up
```
