import z from "zod";

const bookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  genre: z.string().min(1, "Genre is required"),
  publishedYear: z
    .number()
    .int()
    .min(1000, "Invalid year")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
  totalCopies: z.number().int().min(0, "Total copies must be at least 0"),
  availableCopies: z
    .number()
    .int()
    .min(0, "Available copies must be at least 0"),
});

export default bookSchema;
