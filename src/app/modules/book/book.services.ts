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

export const bookServices = {
  createBookDB,
  getBooksDB,
};
