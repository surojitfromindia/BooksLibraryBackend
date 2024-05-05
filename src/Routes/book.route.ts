import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
  updateStock,
} from "../Controllers/Book.controller";
import { Router } from "express";
const route = Router();

route
  .post("/", createBook)
  .get("/", getAllBooks)
  .delete("/:id", deleteBook)
  .get("/:id", getBookById)
  .put("/:id", updateBook)
  .put("/:id/stock", updateStock);
export default route;
