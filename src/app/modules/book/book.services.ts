import { PrismaClient } from "@prisma/client";
import { BookType } from "./book.interface";
import AppError from "../../utils/AppError";

const prisma = new PrismaClient();

const createBookDB = async (payload: BookType) => {
  const result = await prisma.book.create({
    data: payload,
  });
  return result;
};

const getBooksDB = async () => {
  const result = await prisma.book.findMany({});
  return result;
};

const getBookDB = async (bookId: string) => {
  const result = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });
  return result;
};

const updateBook = async (bookId: string, payload: Partial<BookType>) => {
  const isExist = await prisma.book.findUnique({ where: { bookId } });
  if (!isExist) {
    throw new AppError(400, "Cannot update this book");
  }
  const result = await prisma.book.update({
    where: { bookId },
    data: payload,
  });
  return result;
};

const deleteBook = async (bookId: string) => {
  const isExist = await prisma.book.findUnique({ where: { bookId } });
  if (!isExist) {
    throw new AppError(400, "This book is no longer exist");
  }
  const result = await prisma.book.delete({
    where: { bookId },
  });
  return result;
};

export const bookServices = {
  createBookDB,
  getBooksDB,
  getBookDB,
  updateBook,
  deleteBook,
};
