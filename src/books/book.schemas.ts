import { buildJsonSchemas } from "fastify-zod/build/JsonSchema";
import { z } from "zod";

const bookSchemaRequest = z.object({
  id: z.string(),
});

const bookSchemaReply = z.object({
  bookId: z.number(),
  bookName: z.string(),
});

export const { schemas: bookSchemas, $ref } = buildJsonSchemas(
  {
    bookSchemaReply,
    bookSchemaRequest,
  },
  { $id: "bookSchema" }
);
