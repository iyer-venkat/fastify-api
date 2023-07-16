import { buildJsonSchemas } from "fastify-zod/build/JsonSchema";
import { z } from "zod";

const loginSchemaRequest = z.object({
  username: z.string(),
  password: z.string(),
});

const loginSchemaReply = z.object({
  token: z.string(),
});

export type User = z.infer<typeof loginSchemaRequest>;

export const { schemas: loginSchemas, $ref } = buildJsonSchemas(
  {
    loginSchemaRequest,
    loginSchemaReply,
  },
  { $id: "loginSchema" }
);
