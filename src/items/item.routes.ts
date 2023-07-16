import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { getAllItems, getItemById } from "./item.controller";
import { $ref } from "./item.schemas";

export const itemRoutes = (
  server: FastifyInstance,
  options: any,
  done: any
) => {
  const { tags } = options;

  server.get("/", { schema: { tags } }, getAllItems);

  server.get(
    "/:id",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "the item identifier, as itemId",
            },
          },
        },
        response: {
          200: $ref("itemSchemaReply"),
        },
        tags,
      },
    },
    getItemById
  );

  done();
};
