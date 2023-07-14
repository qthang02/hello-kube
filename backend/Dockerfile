FROM node:12-alpine
WORKDIR /app
COPY index.js .
COPY package.json .
RUN npm install
ENTRYPOINT [ "node", "index.js" ]