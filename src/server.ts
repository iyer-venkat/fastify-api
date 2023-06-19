import Fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { swaggerOptions, swaggerUiOptions } from "./swaggerOptions";
import { bookRoutes } from "./books/book.routes";
import { bookSchemas } from "./books/book.schemas";
import { itemRoutes } from "./items/item.routes";
import { itemSchemas } from "./items/item.schemas";

const server = Fastify({ logger: true });

const main = async () => {
  try {
    for (const schema of [...itemSchemas, ...bookSchemas])
      server.addSchema(schema);

    //Register swagger Route
    server.register(fastifySwagger, swaggerOptions);
    server.register(fastifySwaggerUi, swaggerUiOptions);

    // Register app Routes
    server.register(bookRoutes, {
      prefix: "api/books",
      tags: [{ name: "Venkat" }],
    });
    server.register(itemRoutes, {
      prefix: "api/items",
      tags: [{ name: "Venkat" }],
    });

    await server.listen({ port: 3000, host: "0.0.0.0" });
    console.log(`Server ready at http://localhost:3000`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();
