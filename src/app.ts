import express from "express";
import cors from "cors";

//Initialize the express app
const app = express();

// Import routes
import { bookRouter } from "./app/modules/book/book.routes";

// middleware
app.use(cors());
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the server" });
});

app.use("/books", bookRouter);

export default app;
