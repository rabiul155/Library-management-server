import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBookDB = async (payload: any) => {
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

export const bookServices = {
  createBookDB,
  getBooksDB,
  getBookDB,
};
