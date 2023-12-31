import { FastifyInstance } from "fastify";
import { getAllBooks, getBookById } from "./book.controller";
import { $ref } from "./book.schemas";

export const bookRoutes = (
  server: FastifyInstance,
  options: any,
  done: any
) => {
  const { preHandler, tags } = options;
  server.addHook("preHandler", preHandler);

  server.get("/", { schema: { tags } }, getAllBooks);

  server.get(
    "/:id",
    {
      schema: {
        params: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "the book identifier, as bookId",
            },
          },
        },
        response: {
          200: $ref("bookSchemaReply") /*{
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
        tags,
      },
    },
    getBookById
  );

  done();
};
