FROM node:19.8-alpine

ENV NODE_ENV=production

EXPOSE 3000

COPY . /app
WORKDIR /app

RUN npm install

CMD ["npm", "start"]
HEALTHCHECK --timeout=5s \
  CMD wget --no-verbose --tries=1 --spider http://localhost || exit 1
