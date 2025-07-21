// src/App/modules/payments/payments.route.js
import express from "express";
import { PaymentControllers } from "./payments.controller.js";

const router = express.Router();

router.post("/", PaymentControllers.createPayment);
router.get("/", PaymentControllers.getAllPayments);
router.get("/:id", PaymentControllers.getSinglePayment);
router.delete("/:id", PaymentControllers.deletePayment);

export const PaymentRoutes = router;
