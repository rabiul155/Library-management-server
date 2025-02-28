import { PrismaClient } from "@prisma/client";
import AppError from "../../utils/AppError";

const prisma = new PrismaClient();

const createMemberDB = async (payload: MemberType) => {
  const result = await prisma.member.create({
    data: payload,
  });
  return result;
};

const getMembersDB = async () => {
  const result = await prisma.member.findMany({});
  return result;
};

const getMemberDB = async (memberId: string) => {
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  return result;
};

const updateMember = async (memberId: string, payload: Partial<MemberType>) => {
  const isExist = await prisma.member.findUnique({
    where: { memberId },
  });
  if (!isExist) {
    throw new AppError(400, "Cannot update this Member");
  }
  const result = await prisma.member.update({
    where: { memberId },
    data: payload,
  });
  return result;
};

const deleteMember = async (memberId: string) => {
  const isExist = await prisma.member.findUnique({ where: { memberId } });
  if (!isExist) {
    throw new AppError(400, "This Member is no longer exist");
  }
  const result = await prisma.member.delete({
    where: { memberId },
  });
  return result;
};

export const memberServices = {
  createMemberDB,
  getMembersDB,
  getMemberDB,
  updateMember,
  deleteMember,
};
