import {
  createBook,
  deleteBook,
  getAllBooks,
  getOneBook,
  updateBook,
} from "../Controllers/Book.controller";
import { Router } from "express";
const route = Router();

route
  .post("/", createBook)
  .get("/", getAllBooks)
  .get("/:id", getOneBook)
  .put("/:id", updateBook)
  .delete("/:id", deleteBook);
  
export default route;
