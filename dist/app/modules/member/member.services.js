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
exports.memberServices = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = __importDefault(require("../../utils/AppError"));
const prisma = new client_1.PrismaClient();
const createMemberDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.create({
        data: payload,
    });
    return result;
});
const getMembersDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.findMany({});
    return result;
});
const getMemberDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.member.findUnique({
        where: {
            memberId,
        },
    });
    return result;
});
const updateMember = (memberId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.member.findUnique({
        where: { memberId },
    });
    if (!isExist) {
        throw new AppError_1.default(400, "Cannot update this Member");
    }
    const result = yield prisma.member.update({
        where: { memberId },
        data: payload,
    });
    return result;
});
const deleteMember = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma.member.findUnique({ where: { memberId } });
    if (!isExist) {
        throw new AppError_1.default(400, "This Member is no longer exist");
    }
    const result = yield prisma.member.delete({
        where: { memberId },
    });
    return result;
});
exports.memberServices = {
    createMemberDB,
    getMembersDB,
    getMemberDB,
    updateMember,
    deleteMember,
};
