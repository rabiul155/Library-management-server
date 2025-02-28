"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundRoute = (req, res, next) => {
    res.status(400).json({
        success: false,
        message: "Route not found",
    });
};
exports.default = notFoundRoute;
