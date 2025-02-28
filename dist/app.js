"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//Initialize the express app
const app = (0, express_1.default)();
// Import routes
const book_routes_1 = require("./app/modules/book/book.routes");
const member_route_1 = require("./app/modules/member/member.route");
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const notFoundRoute_1 = __importDefault(require("./app/middleware/notFoundRoute"));
const borrow_route_1 = require("./app/modules/borrow/borrow.route");
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//routes
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from the server" });
});
app.use("/api/books", book_routes_1.bookRouter);
app.use("/api/members", member_route_1.memberRouter);
app.use("/api/", borrow_route_1.borrowRoute);
// not found route
app.use("*", notFoundRoute_1.default);
//global error handler
app.use(globalErrorHandler_1.default);
exports.default = app;
