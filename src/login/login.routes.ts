import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { authenticateUser } from "./login.controller";
import { $ref } from "./login.schemas";

export const loginRoutes = (
  server: FastifyInstance,
  options: any,
  done: any
) => {
  const { tags } = options;

  server.post(
    "/",
    {
      schema: {
        body: $ref("loginSchemaRequest"),
        response: { 200: $ref("loginSchemaReply") },
        tags,
      },
    },
    authenticateUser
  );

  done();
};
