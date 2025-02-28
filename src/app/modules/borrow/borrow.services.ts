import { PrismaClient } from "@prisma/client";
import BorrowType from "./borrow.interface";

const prisma = new PrismaClient();

const borrowBook = async (payload: BorrowType) => {
  const result = await prisma.borrowRecord.create({
    data: payload,
  });
  return result;
};

const returnBook = async (borrowId: string) => {
  const result = await prisma.borrowRecord.update({
    where: { borrowId },
    data: {
      returnDate: new Date(),
    },
  });
  return result;
};

export const borrowServices = {
  borrowBook,
  returnBook,
};
