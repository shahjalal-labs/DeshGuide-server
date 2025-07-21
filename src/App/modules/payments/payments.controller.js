// src/App/modules/payments/payments.controller.js
import sendResponse from "../../utils/sendResponse.js";
import { PaymentServices } from "./payments.service.js";

const createPayment = async (req, res, next) => {
  try {
    const result = await PaymentServices.createPayment(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Payment created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllPayments = async (req, res, next) => {
  try {
    const result = await PaymentServices.getAllPayments();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Payments retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSinglePayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PaymentServices.getPaymentById(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Payment retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deletePayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PaymentServices.deletePayment(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Payment deleted successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const PaymentControllers = {
  createPayment,
  getAllPayments,
  getSinglePayment,
  deletePayment,
};
