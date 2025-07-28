// src/App/modules/payments/payments.route.js
import express from "express";
import { PaymentControllers } from "./payments.controller.js";
import { verifyToken } from "../auth/jwt.js";
import { authenticateUser } from "../auth/auth.middleware.js";

const router = express.Router();

router.post(
  "/",
  verifyToken,
  authenticateUser,
  PaymentControllers.createPayment,
);
router.get("/", PaymentControllers.getAllPayments);
router.get("/:id", PaymentControllers.getSinglePayment);
router.delete("/:id", PaymentControllers.deletePayment);

// ✅ New route for Stripe client secret
router.post("/create-payment-intent", PaymentControllers.createPaymentIntent);

export const PaymentRoutes = router;
