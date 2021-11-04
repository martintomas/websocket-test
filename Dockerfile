FROM ruby:3.0.0

ENV APP_HOME /service
RUN mkdir $APP_HOME
WORKDIR $APP_HOME
COPY ./ $APP_HOME

RUN apt-get update
RUN apt-get install -y shared-mime-info

RUN bundle config set path 'vendor'
RUN gem install bundler:'> 2'
RUN bundle install
