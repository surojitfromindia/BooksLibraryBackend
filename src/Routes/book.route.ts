import {
  createBook,
  deleteBook,
  getAllBooks,
  getOneBook,
} from "../Controllers/Book.controller";
import { Router } from "express";
const route = Router();

route
  .post("/", createBook)
  .get("/", getAllBooks)
  .get("/:id", getOneBook)
  .delete("/:id", deleteBook);
  
export default route;
