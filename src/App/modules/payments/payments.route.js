// src/App/modules/payments/payments.route.js
import express from "express";
import { PaymentControllers } from "./payments.controller.js";

const router = express.Router();

router.post("/", PaymentControllers.createPayment);
router.get("/", PaymentControllers.getAllPayments);
router.get("/:id", PaymentControllers.getSinglePayment);
router.delete("/:id", PaymentControllers.deletePayment);

// ✅ New route for Stripe client secret
router.post("/create-payment-intent", PaymentControllers.createPaymentIntent);

export const PaymentRoutes = router;
