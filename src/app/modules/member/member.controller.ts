import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { memberServices } from "./member.services";

const createMember: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await memberServices.createMemberDB(req.body);
  res.status(201).json({
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

const getMembers: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await memberServices.getMembersDB();
  res.status(200).json({
    success: true,
    message: "Member find successfully",
    data: result,
  });
});

const getMember: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await memberServices.getMemberDB(req.params.memberId);
  res.status(200).json({
    success: true,
    message: "Member find successfully",
    data: result,
  });
});

const updateMember: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await memberServices.updateMember(
    req.params.memberId,
    req.body
  );
  res.status(200).json({
    success: true,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMember: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await memberServices.deleteMember(req.params.memberId);
  res.status(200).json({
    success: true,
    message: "Member deleted successfully",
    data: result,
  });
});

export const memberController = {
  createMember,
  getMembers,
  getMember,
  updateMember,
  deleteMember,
};
