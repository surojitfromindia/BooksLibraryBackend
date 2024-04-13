import {
  createMember,
  deleteMember,
  getOneMember,
  getallMembers,
} from "Controllers/member.controller";
import { Router } from "express";
const router = Router();

router
  .post("/", createMember)
  .get("/", getallMembers)
  .get("/:id", getOneMember)
  .delete("/:id", deleteMember);

export default router;
