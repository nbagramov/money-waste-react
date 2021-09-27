FROM node:10.16-alpine

WORKDIR ./app
COPY package*.json ./
RUN npm install --silent

COPY src .
EXPOSE 3000

CMD ["npm","start"]