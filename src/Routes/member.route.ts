import {
  createMember,
  deleteMember,
  getOneMember,
  getallMembers,
} from "../Controllers/member.controller";
import { Router } from "express";
const router = Router();

router
  .post("/", createMember)
  .get("/", getallMembers)
  .get("/:id", getOneMember)// http://localhost:7000/members/200
  .delete("/:id", deleteMember);

export default router;
