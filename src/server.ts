import dotenv from "dotenv";
import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { swaggerOptions, swaggerUiOptions } from "./swaggerOptions";
import { bookRoutes } from "./books/book.routes";
import { bookSchemas } from "./books/book.schemas";
import { itemRoutes } from "./items/item.routes";
import { itemSchemas } from "./items/item.schemas";
import { loginRoutes } from "./login/login.routes";
import { loginSchemas } from "./login/login.schemas";
import { authenticateUser } from "../middleware/auth";

dotenv.config();
const server = Fastify({ logger: true });

const main = async () => {
  try {
    for (const schema of [...loginSchemas, ...itemSchemas, ...bookSchemas])
      server.addSchema(schema);

    //Register swagger Route
    server.register(fastifySwagger, swaggerOptions);
    server.register(fastifySwaggerUi, swaggerUiOptions);

    // server.addHook("preHandler", authenticateUser);

    // Register app Routes
    server.register(loginRoutes, {
      prefix: "api/login",
      tags: ["login"],
    });

    server.register(bookRoutes, {
      prefix: "api/books",
      preHandler: authenticateUser,
      tags: ["books"],
    });
    server.register(itemRoutes, {
      prefix: "api/items",
      preHandler: authenticateUser,
      tags: ["items"],
    });

    await server.listen({ port: 3000, host: "0.0.0.0" });
    console.log(`Server ready at http://localhost:3000`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

main();
