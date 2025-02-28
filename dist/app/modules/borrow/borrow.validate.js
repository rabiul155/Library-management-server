"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const borrowBookValidationSchema = zod_1.z.object({
    bookId: zod_1.z.string({ required_error: "Book id is required" }),
    memberId: zod_1.z.string({ required_error: "Member id is required" }),
});
exports.default = borrowBookValidationSchema;
