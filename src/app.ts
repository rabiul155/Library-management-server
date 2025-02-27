import express from "express";
import cors from "cors";

//Initialize the express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from the server" });
});

export default app;
