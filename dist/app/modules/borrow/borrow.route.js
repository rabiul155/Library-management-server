"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const borrow_validate_1 = __importDefault(require("./borrow.validate"));
const borrow_controller_1 = require("./borrow.controller");
const route = express_1.default.Router();
route.post("/borrow", (0, validateRequest_1.default)(borrow_validate_1.default), borrow_controller_1.borrowController.borrowBook);
route.post("/return", borrow_controller_1.borrowController.returnBook);
exports.borrowRoute = route;
