import express from "express";

import validateRequest from "../../middleware/validateRequest";
import { memberController } from "./member.controller";
import memberValidationSchema from "./member.validate";

const router = express.Router();

router.get("/", memberController.getMembers);
router.post(
  "/",
  validateRequest(memberValidationSchema),
  memberController.createMember
);

router.get("/:memberId", memberController.getMember);
router.patch(
  "/:memberId",
  validateRequest(memberValidationSchema.partial()),
  memberController.updateMember
);
router.delete("/:memberId", memberController.deleteMember);

export const memberRouter = router;
