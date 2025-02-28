"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const member_controller_1 = require("./member.controller");
const member_validate_1 = __importDefault(require("./member.validate"));
const router = express_1.default.Router();
router.get("/", member_controller_1.memberController.getMembers);
router.post("/", (0, validateRequest_1.default)(member_validate_1.default), member_controller_1.memberController.createMember);
router.get("/:memberId", member_controller_1.memberController.getMember);
router.patch("/:memberId", (0, validateRequest_1.default)(member_validate_1.default.partial()), member_controller_1.memberController.updateMember);
router.delete("/:memberId", member_controller_1.memberController.deleteMember);
exports.memberRouter = router;
