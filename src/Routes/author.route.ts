import {
  createAuthor,
  deleteAuthor,
  getallAuthors,
} from "../Controllers/author.controller";
import { Router } from "express";
const route = Router();
route
  .post("/", createAuthor)
  .get("/", getallAuthors)
  .delete("/:id", deleteAuthor);
export default route;
