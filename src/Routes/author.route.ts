import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
} from "../Controllers/author.controller";
import { Router } from "express";
const route = Router();
route
  .post("/", createAuthor)
  .get("/", getAllAuthors)
  .delete("/:id", deleteAuthor);
export default route;
