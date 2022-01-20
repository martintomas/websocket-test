# Websocket-Test
This repository contains super simple application which tests websocket connection.

## How to install
You need to have installed following tools at your local machine:
 - ruby -- used to run Rails framework
 - bundler -- used to install all Ruby libraries
 - redis -- used to store websocket messages

First of all open `.env` file and setup properly variables there:
```bash
REDIS_URL=redis://localhost:6379/0
ACTION_CABLE_SERVER=ws://localhost:3000/cable
ALLOWED_HOST=example.com
```
afterwards you can install and run rest of the stuff
```bash
bundle install
bundle exec rake db:create db:migrate
bundle exec rails s
redis-server
```

## How to test websocket
When you visit root page of Rails app (http://localhost:3000 by default). You should see: `Websocket message is:`.
Rest of the message is updated by server via broadcasted message transferred over websocket connection. You can manually trigger this broadcasting by typing:
```bash
rails c # opens rails console
ActionCable.server.broadcast 'messages', 'This is broadcasted message' # type inside rails console
```
text at page should now contain:
```
Websocket message is: This is broadcasted message
```
if something goes wrong, please check javascript console inside your browser and also all websocket network traffic.

## Docker
Repository contains Dockerfile with docker-compose enhancement, therefore whole app can be run inside dockerized container.
```bash
docker-compose build
docker-compose run web bundle exec rake db:create db:migrate
docker-compose up
docker-compose run web bundle exec rails c # to start rails console
```
