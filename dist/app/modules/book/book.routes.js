"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const book_validation_1 = __importDefault(require("./book.validation"));
const router = express_1.default.Router();
router.get("/", book_controller_1.bookController.getBooks);
router.post("/", (0, validateRequest_1.default)(book_validation_1.default), book_controller_1.bookController.createBook);
router.get("/:bookId", book_controller_1.bookController.getBook);
router.patch("/:bookId", (0, validateRequest_1.default)(book_validation_1.default.partial()), book_controller_1.bookController.updateBook);
router.delete("/:bookId", book_controller_1.bookController.deleteBook);
exports.bookRouter = router;
