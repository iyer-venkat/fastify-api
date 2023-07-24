import dotenv from "dotenv";
import Fastify from "fastify";
import cookie, { FastifyCookieOptions } from "@fastify/cookie";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

import { swaggerOptions, swaggerUiOptions } from "./swaggerOptions";
import { authenticateUser } from "../middleware/auth";
import { bookSchemas, itemSchemas, loginSchemas } from "./allSchemas";
import { bookRoutes, itemRoutes, loginRoutes } from "./allRoutes";

dotenv.config();
const server = Fastify({ logger: true });

const main = async () => {
  try {
    for (const schema of [...loginSchemas, ...itemSchemas, ...bookSchemas])
      server.addSchema(schema);

    //Register swagger Route
    server.register(fastifySwagger, swaggerOptions);
    server.register(fastifySwaggerUi, swaggerUiOptions);

    server.register(cookie, {
      secret: "my-secret", // for cookies signature
      parseOptions: {}, // options for parsing cookies
    } as FastifyCookieOptions);

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
