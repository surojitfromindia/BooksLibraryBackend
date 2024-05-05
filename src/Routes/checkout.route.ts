import { Router } from "express";
import {createCheckout, getAllCheckouts} from "../Controllers/Checkout.controller";

const checkoutRoute = Router();

checkoutRoute.post("/", createCheckout).get("/", getAllCheckouts);

export default checkoutRoute;