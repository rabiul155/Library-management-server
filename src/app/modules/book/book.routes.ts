import express from "express";
import { bookController } from "./book.controller";

const router = express.Router();

router.get("/", bookController.getBooks);
router.post("/", bookController.createBook);

export const bookRouter = router;
