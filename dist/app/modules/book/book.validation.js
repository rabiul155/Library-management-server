"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const bookValidationSchema = zod_1.default.object({
    title: zod_1.default.string().min(1, "Title is required"),
    genre: zod_1.default.string().min(1, "Genre is required"),
    publishedYear: zod_1.default
        .number()
        .int()
        .min(1000, "Invalid year")
        .max(new Date().getFullYear(), "Year cannot be in the future"),
    totalCopies: zod_1.default.number().int().min(0, "Total copies must be at least 0"),
    availableCopies: zod_1.default
        .number()
        .int()
        .min(0, "Available copies must be at least 0"),
});
exports.default = bookValidationSchema;
