import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";
import books from "../data/books.json";

export const getAllBooks = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  reply.send(books);
};

export const getBookById = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { id } = request.params as { id: string };
  const book = books.find((book) => book.bookId === +id);
  reply.send(book);
};
