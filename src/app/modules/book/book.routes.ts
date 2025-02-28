import express from "express";
import { bookController } from "./book.controller";

const router = express.Router();

router.get("/", bookController.getBooks);
router.post("/", bookController.createBook);

router.get("/:bookId", bookController.getBook);
router.patch("/:bookId", bookController.updateBook);
router.delete("/:bookId", bookController.deleteBook);

export const bookRouter = router;
