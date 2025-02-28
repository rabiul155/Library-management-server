import { z } from "zod";

const memberValidationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z
    .string()
    .min(11, "Phone number must be 11 character")
    .max(11, "Phone number must be 11 character"),

  membershipDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
});

export default memberValidationSchema;
