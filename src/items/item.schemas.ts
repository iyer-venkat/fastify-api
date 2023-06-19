import { buildJsonSchemas } from "fastify-zod/build/JsonSchema";
import { z } from "zod";

const itemSchemaRequest = z.object({
  id: z.string(),
});

const itemSchemaReply = z.object({
  itemId: z.number(),
  itemName: z.string(),
});

export const { schemas: itemSchemas, $ref } = buildJsonSchemas(
  {
    itemSchemaRequest,
    itemSchemaReply,
  },
  { $id: "itemSchema" }
);
