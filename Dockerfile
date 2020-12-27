FROM ruby:2.6.6-buster

LABEL "name"="bandar" \
  "description"="Bandar: a personal website" \
  "version"="1.0.0"

RUN curl -sL https://deb.nodesource.com/setup_14.x | /bin/bash - \
  && apt-get update -qq \
  && apt-get install -y build-essential libpq-dev apt-transport-https ca-certificates tzdata nodejs \
  && npm install -g yarn \
  && gem install rails \
  && gem install rake \
  && gem install bundler

RUN mkdir /bandar
WORKDIR /bandar
COPY Gemfile Gemfile.lock package.json yarn.lock /bandar/
RUN bundle install \
  && yarn install \
  && bin/rails webpacker:compile
COPY . /bandar

EXPOSE 3000
