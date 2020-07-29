FROM node:14.6
WORKDIR /api
COPY package*.json ./
RUN yarn
CMD ["yarn", "run", "start:dev"]