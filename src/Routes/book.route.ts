import {
  createBook,
  deleteBook,
  getallBooks,
} from "../Controllers/Book.controller";
import { Router } from "express";
const route = Router();

route.post("/", createBook).get("/", getallBooks).delete("/:id", deleteBook);
export default route;