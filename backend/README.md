## Installation

```bash
$ npm install
```

## Running the app

```bash
docker run \
  -d \
  -e POSTGRES_USER=example \
  -e POSTGRES_PASSWORD=example \
  -e POSTGRES_DB=example \
  -p 5432:5432 \
  postgres:12
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
