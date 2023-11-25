FROM node:18-alpine AS build

WORKDIR /home/node
COPY website ./app

RUN npm install --location=global npm@9.5.1 gatsby-cli@5.11.0 \
    && cd /home/node/app \
    && npm install \ 
    && gatsby clean && gatsby build

FROM nginx:1.25-alpine
COPY --from=build /home/node/app/public /usr/share/nginx/html
