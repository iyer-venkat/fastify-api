import { FastifyRequest, FastifyReply } from "fastify";
import jsonwebtoken, { Secret, VerifyOptions } from "jsonwebtoken";

export const authenticateUser = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: any
) => {
  if (!request.headers.authorization) {
    return reply.code(401).send({
      error: "Please identify yourself before accessing restricted area...",
    });
  }

  // Bearer <token>>
  const authHeader = request.headers.authorization;
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token is valid
    jsonwebtoken.verify(token, process.env.JWT_SECRET as Secret);
  } catch (error) {
    return reply.code(401).send({ error: "Not Authorized" });
  }

  done();
};
