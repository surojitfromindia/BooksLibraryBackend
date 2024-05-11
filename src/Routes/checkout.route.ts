import { createCheckout, getAllCheckouts } from "../Controllers/Chekout.controller";
import {Router} from "express";

const route= Router();

route.post("/", createCheckout).get("/", getAllCheckouts);
export default route;