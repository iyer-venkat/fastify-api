/*
Could not find a declaration file for module 'fastify-swagger'. 
'/home/shiva/Public/Tutorials/fastify-api/node_modules/fastify-swagger/index.js' implicitly has an 'any' type.

Try `npm i --save-dev @types/fastify-swagger` if it exists or 
add a new declaration (.d.ts) file containing `declare module 'fastify-swagger';`
*/

export const swaggerOptions = {
  swagger: {
    info: {
      title: "fastify-apis",
      description: "API implementation using Fastify.",
      version: "1.0.0",
    },
    host: "localhost:3000",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    // tags: [
    //   { name: "Fastify-APIs", description: "API implementation with Fastify" },
    // ],
  },
};

export const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};
