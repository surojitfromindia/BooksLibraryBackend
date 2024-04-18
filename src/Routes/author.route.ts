import { createAuthor, getallAuthors } from "../Controllers/author.controller";
import { Router } from "express";
const route = Router();
route.post("/", createAuthor).get("/", getallAuthors);
export default route;
