import express from "express";
import { bookController } from "./book.controller";
import validateRequest from "../../middleware/validateRequest";
import bookValidationSchema from "./book.validation";

const router = express.Router();

router.get("/", bookController.getBooks);
router.post(
  "/",
  validateRequest(bookValidationSchema),
  bookController.createBook
);

router.get("/:bookId", bookController.getBook);
router.patch(
  "/:bookId",
  validateRequest(bookValidationSchema.partial()),
  bookController.updateBook
);
router.delete("/:bookId", bookController.deleteBook);

export const bookRouter = router;
