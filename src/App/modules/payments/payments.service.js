// src/App/modules/payments/payments.service.js
import { Payment } from "./payments.model.js";

const createPayment = async (data) => {
  return await Payment.create(data);
};

const getAllPayments = async () => {
  return await Payment.find().sort({ createdAt: -1 });
};

const getPaymentById = async (id) => {
  return await Payment.findById(id);
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
};
