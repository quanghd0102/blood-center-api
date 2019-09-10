FROM node:8-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm config set unsafe-perm true
RUN apk --no-cache add --virtual native-deps \
  git g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install node-gyp -g &&\
  npm install &&\
  npm rebuild bcrypt --build-from-source && \
  npm cache clean --force &&\
  apk del native-deps
RUN npm install pm2 -g

RUN apk add --update bash && rm -rf /var/cache/apk/*

COPY . .
EXPOSE 8080

CMD ["pm2", "start", "--no-daemon", "processes.json"]
