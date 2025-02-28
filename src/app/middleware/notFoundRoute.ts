import { RequestHandler } from "express";

const notFoundRoute: RequestHandler = (req, res, next) => {
  res.status(404).json({ message: "Page not found" });
};

export default notFoundRoute;
