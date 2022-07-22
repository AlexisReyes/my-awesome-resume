FROM node:16-alpine AS build

WORKDIR /home/node
COPY website ./app

RUN npm install --location=global npm@8.15.0 gatsby-cli@4.19.0 \
    && cd /home/node/app \
    && npm install \ 
    && gatsby clean && gatsby build

FROM nginx:1.23-alpine
COPY --from=build /home/node/app/public /usr/share/nginx/html
