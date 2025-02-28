"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const memberValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    email: zod_1.z.string().email("Invalid email format"),
    phone: zod_1.z
        .string()
        .min(11, "Phone number must be 11 character")
        .max(11, "Phone number must be 11 character"),
    membershipDate: zod_1.z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }),
});
exports.default = memberValidationSchema;
