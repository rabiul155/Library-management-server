import { z } from "zod";

const borrowBookValidationSchema = z.object({
  bookId: z.string({ required_error: "Book id is required" }),
  memberId: z.string({ required_error: "Member id is required" }),
});
export default borrowBookValidationSchema;
