FROM node:18.20.2-slim

WORKDIR app

COPY . /app/

RUN npm install 

RUN which next