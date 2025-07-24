// src/App/modules/payments/payments.service.js
import { Payment } from "./payments.model.js";

import { stripe } from "../../config/stripe.js";

const createPayment = async (data) => {
  return await Payment.create(data);
};

const getAllPayments = async () => {
  return await Payment.find().sort({ createdAt: -1 });
};

const getPaymentById = async (id) => {
  const res = await Payment.findById(id).populate("bookingId");
  if (!res) {
    throw new Error("Payment not found");
  }
  return res;
};

const deletePayment = async (id) => {
  const payment = await Payment.findById(id);
  if (!payment) {
    throw new Error("Payment not found");
  }
  return await Payment.findByIdAndDelete(id);
};

// ✅ Stripe: Create Payment Intent
const createStripePaymentIntent = async (amountInCents) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountInCents,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return paymentIntent.client_secret;
};

export const PaymentServices = {
  createPayment,
  getAllPayments,
  getPaymentById,
  deletePayment,
  createStripePaymentIntent, // ✅ new export
};

/* import { Payment } from "./payments.model.js";

const createPayment = async (data) => {
  return await Payment.create(data);
};

const getAllPayments = async () => {
  return await Payment.find().sort({ createdAt: -1 });
};

const getPaymentById = async (id) => {
  const res = await Payment.findById(id).populate("bookingId");
  if (!res) {
    throw new Error("Payment not found");
  }
  return res;
};

const deletePayment = async (id) => {
  const payment = await Payment.findById(id);
  if (!payment) {
    throw new Error("Payment not found");
  }
  return await Payment.findByIdAndDelete(id);
};

export const PaymentServices = {
  createPayment,
  getAllPayments,
  getPaymentById,
  deletePayment,
}; */
