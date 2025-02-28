"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const member_services_1 = require("./member.services");
const createMember = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_services_1.memberServices.createMemberDB(req.body);
    res.status(201).json({
        success: true,
        message: "Member created successfully",
        data: result,
    });
}));
const getMembers = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_services_1.memberServices.getMembersDB();
    res.status(200).json({
        success: true,
        message: "Member find successfully",
        data: result,
    });
}));
const getMember = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_services_1.memberServices.getMemberDB(req.params.memberId);
    res.status(200).json({
        success: true,
        message: "Member find successfully",
        data: result,
    });
}));
const updateMember = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_services_1.memberServices.updateMember(req.params.memberId, req.body);
    res.status(200).json({
        success: true,
        message: "Member updated successfully",
        data: result,
    });
}));
const deleteMember = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_services_1.memberServices.deleteMember(req.params.memberId);
    res.status(200).json({
        success: true,
        message: "Member deleted successfully",
        data: result,
    });
}));
exports.memberController = {
    createMember,
    getMembers,
    getMember,
    updateMember,
    deleteMember,
};
