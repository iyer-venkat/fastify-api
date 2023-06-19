import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { getAllItems, getItemById } from "./item.controller";
import { $ref } from "./item.schemas";

export const itemRoutes = (
  server: FastifyInstance,
  options: any,
  done: any
) => {
  server.get("/", getAllItems);

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
          200: $ref("itemSchemaReply") /*{
            type: "object",
            properties: {
              itemId: {
                type: "string",
                description: "the item identifier, as itemId",
              },
              itemName: {
                type: "string",
                description: "the item name",
              },
            },
          }*/,
        },
      },
    },
    getItemById
  );

  done();
};
