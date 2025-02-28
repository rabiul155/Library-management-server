import express from "express";
import cors from "cors";

//Initialize the express app
const app = express();

// Import routes
import { bookRouter } from "./app/modules/book/book.routes";
import { memberRouter } from "./app/modules/member/member.route";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFoundRoute from "./app/middleware/notFoundRoute";

// middleware
app.use(cors());
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the server" });
});

app.use("/api/books", bookRouter);
app.use("/api/members", memberRouter);

// not found route
app.use("*", notFoundRoute);

//global error handler
app.use(globalErrorHandler);

export default app;
