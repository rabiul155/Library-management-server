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
exports.bookServices = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = __importDefault(require("../../utils/AppError"));
const prisma = new client_1.PrismaClient();
const createBookDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.create({
        data: payload,
    });
    return result;
});
const getBooksDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findMany({});
    return result;
});
const getBookDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.book.findUnique({
        where: {
            bookId,
        },
    });
    return result;
});
const updateBook = (bookId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.book.findUnique({ where: { bookId } });
    if (!isExist) {
        throw new AppError_1.default(400, "Cannot update this book");
    }
    const result = yield prisma.book.update({
        where: { bookId },
        data: payload,
    });
    return result;
});
const deleteBook = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.book.findUnique({ where: { bookId } });
    if (!isExist) {
        throw new AppError_1.default(400, "This book is no longer exist");
    }
    const result = yield prisma.book.delete({
        where: { bookId },
    });
    return result;
});
exports.bookServices = {
    createBookDB,
    getBooksDB,
    getBookDB,
    updateBook,
    deleteBook,
};
