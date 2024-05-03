import {
  createBook,
  deleteBook,
  getAllBooks,
} from "../Controllers/Book.controller";
import { Router } from "express";
const route = Router();

route.post("/", createBook).get("/", getAllBooks).delete("/:id", deleteBook);
export default route;