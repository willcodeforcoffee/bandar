FROM ruby:2.7.2-buster

LABEL "name"="bandar" \
  "description"="Bandar: a personal website" \
  "version"="1.1.0"

RUN curl -sL https://deb.nodesource.com/setup_14.x | /bin/bash - \
  && apt-get update -qq \
  && apt-get install -y build-essential libpq-dev apt-transport-https ca-certificates tzdata nodejs \
  && npm install -g yarn \
  && gem install rails \
  && gem install rake \
  && gem install bundler

RUN mkdir /bandar
ENV RAILS_ROOT /bandar
WORKDIR /bandar
COPY Gemfile Gemfile.lock package.json yarn.lock /bandar/
RUN cd /bandar \
  && bundle install \
  && yarn install
COPY . /bandar
RUN bin/rails assets:clean assets:precompile

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

EXPOSE 4040
