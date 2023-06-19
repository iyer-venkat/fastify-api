import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";
import items from "../data/items.json";

export const getAllItems = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  reply.send(items);
};

export const getItemById = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  const item = items.find((item) => item.itemId === +id);
  reply.send(item);
};
