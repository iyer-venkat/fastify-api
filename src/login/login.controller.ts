import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";
import jsonwebtoken, { Secret, SignOptions } from "jsonwebtoken";
import { User } from "./login.schemas";

export const authenticateUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { username, password } = request.body as User;
  console.log(`${username} is trying to login ..`);

  if (username === "Harry" && password === "P0tt3r") {
    return reply.code(200).send({
      token: jsonwebtoken.sign(
        { user: "Harry" },
        process.env.JWT_SECRET as Secret,
        { jwtid: "fastify-api", expiresIn: 60 }
      ),
    });
  }

  return reply.code(401).send({
    message: "The username and password your provided are invalid",
  });
};
