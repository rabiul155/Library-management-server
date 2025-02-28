"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const book_services_1 = require("./book.services");
const createBook = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_services_1.bookServices.createBookDB(req.body);
    res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: result,
    });
}));
const getBooks = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_services_1.bookServices.getBooksDB();
    res.status(200).json({
        success: true,
        message: "Book find successfully",
        data: result,
    });
}));
const getBook = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_services_1.bookServices.getBookDB(req.params.bookId);
    res.status(200).json({
        success: true,
        message: "Book find successfully",
        data: result,
    });
}));
const updateBook = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_services_1.bookServices.updateBook(req.params.bookId, req.body);
    res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: result,
    });
}));
const deleteBook = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_services_1.bookServices.deleteBook(req.params.bookId);
    res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        data: result,
    });
}));
exports.bookController = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
};
