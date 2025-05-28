FROM zelejs/allin-web:cache-npm-slim as cache


##final-builder
FROM node:16
WORKDIR /usr/src
RUN npm --registry=https://registry.npm.taobao.org  i  -g umi@^3.0.0
COPY --from=cache /root/node_modules ./node_modules
