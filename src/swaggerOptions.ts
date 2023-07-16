/*
Could not find a declaration file for module 'fastify-swagger'. 
'/home/shiva/Public/Tutorials/fastify-api/node_modules/fastify-swagger/index.js' implicitly has an 'any' type.

Try `npm i --save-dev @types/fastify-swagger` if it exists or 
add a new declaration (.d.ts) file containing `declare module 'fastify-swagger';`
*/

import { SwaggerOptions } from "@fastify/swagger";
import { FastifyRegisterOptions } from "fastify";

export const swaggerOptions: FastifyRegisterOptions<SwaggerOptions> = {
  openapi: {
    openapi: "3.0.3",
    info: {
      title: "fastify-apis",
      description: "API implementation using Fastify.",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:3000" }],
    tags: [
      { name: "books", description: "API implementation for books" },
      { name: "items", description: "API implementation for items" },
      { name: "login", description: "API implementation for login" },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
};

export const swaggerUiOptions = {
  openapi: "3.0.3",
  routePrefix: "/docs",
  exposeRoute: true,
};
