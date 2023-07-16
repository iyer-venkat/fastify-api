# fastify-api

An attempt at writing Node APIs with Fastify

### Running the application

use `yarn install` or `npm i` to install all dependencies \
use `yarn dev` or `npm run dev` to run the project

### Swagger

navigate to `http://localhost:3000/docs` for swagger doco

### Testing the APIs

use `REST Client` extension in VSCode & use the `src/tests/tests.http` file to "Send Requests"

### Authorization added to books api

Books APIs cannot be called without a valid auth token. \
Use the `login` API to get an access token (expires in 60 seconds) to call `books` APIs. \
\
This can be done with swagger-ui or using the `tests.http` file (REST Client in VSCode).
