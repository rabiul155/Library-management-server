import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { bookServices } from "./book.services";

const createBook: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await bookServices.createBookDB(req.body);
  res.status(201).json({
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

const getBooks: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await bookServices.getBooksDB();
  res.status(200).json({
    success: true,
    message: "Book find successfully",
    data: result,
  });
});

export const bookController = {
  createBook,
  getBooks,
};
