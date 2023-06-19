import { z } from "zod";
import { buildJsonSchemas, FastifyZod, register } from "fastify-zod";
import Fastify from "fastify";
import fs from "fs";

const ItemParam = z.object({
  id: z.string()
});

const ItemQuery = z.object({
  itemId: z.string()
});

enum TodoStateEnum {
  Todo = `todo`,
  InProgress = `in progress`,
  Done = `done`
}

const TodoState = z.nativeEnum(TodoStateEnum);

const ItemBody = z.object({
  label: z.string(),
  dueDate: z.date().optional(),
  state: TodoState
});

const models = {
  ItemBody,
  ItemQuery,
  ItemParam
};

declare module "fastify" {
  interface FastifyInstance {
    readonly zod: FastifyZod<typeof models>;
  }
}
const server = Fastify({logger:true});

const start = async () => {
  await register(server, {
    jsonSchemas: buildJsonSchemas(models),
    swaggerOptions: {
      openapi: {
        info: {
          title: "My example",
          version: "0.1.0"
        },
        servers: [
          {
            url: "http://localhost:3000",
            description: "local env"
          }
        ],
        tags: [{ name: "hello", description: "routes used by different FEs" }]
      }
    }
  });

  await server.register(async (app, routerOptions, done) => {
    app.zod.post(
      `/hello/:id`,
      {
        operationId: `postTodoItem`,
        querystring: `ItemQuery`,
        params: `ItemParam`,
        body: `ItemBody`,
        reply: `ItemBody`
      },
      async ({ query, params, body }) => {
        console.log("param", params.id);
        console.log("query", query.itemId);
        console.log("body", body);
        return body;
      }
    );

    done();
  });

  // Run the server!
  await server.ready();

  // server.swagger();
  const yaml = server.swagger({ yaml: true });
  fs.writeFileSync("swagger.yaml", yaml);

  await server.listen({ port: 3000, host: "0.0.0.0" });
};

start()
  .then(() => console.info("🔌️ Cool, fastify is up!"))
  .catch((err) => {
    console.error("💥 Error caught in app", err);
    process.exit(1);
  });
