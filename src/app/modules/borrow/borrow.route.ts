import express from "express";
import validateRequest from "../../middleware/validateRequest";
import borrowBookValidationSchema from "./borrow.validate";
import { borrowController } from "./borrow.controller";
const route = express.Router();

route.post(
  "/borrow",
  validateRequest(borrowBookValidationSchema),
  borrowController.borrowBook
);
route.post("/return", borrowController.returnBook);

export const borrowRoute = route;
