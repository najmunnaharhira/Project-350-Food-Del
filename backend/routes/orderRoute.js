import authMiddleware from "../middleware/auth.js";
import express from "express";

import {
  placeOrder,
  verifyOrder,
  userOrder,
  listOrders,
} from "../controllers/order";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);

export default orderRouter;
