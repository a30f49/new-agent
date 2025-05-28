FROM allin-web:build-npm-slim-1 as build

WORKDIR /usr/src
ADD ./package.json ./package.json
ADD ./.umirc.js ./.umirc.js
ADD ./src ./src
ADD ./public ./public
ADD ./init.js ./init.js
ADD ./webpack.config.js ./webpack.config.js

RUN npm --registry=https://registry.npm.taobao.org  i  --force


CMD ["sh", "-c", "/bin/cp -r /usr/src/dist/* /var/dist"]
