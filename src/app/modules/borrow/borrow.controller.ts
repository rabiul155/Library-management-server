import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { borrowServices } from "./borrow.services";

const borrowBook: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await borrowServices.borrowBook(req.body);
  res.status(201).json({
    success: true,
    message: "Borrow successfully",
    data: result,
  });
});

const returnBook: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await borrowServices.returnBook(req.body.borrowId);
  res.status(201).json({
    success: true,
    message: "Return successfully",
    data: result,
  });
});

export const borrowController = {
  borrowBook,
  returnBook,
};
