// src/App/modules/bookings/bookings.controller.js

import sendResponse from "../../utils/sendResponse.js";
import { BookingServices } from "./bookings.service.js";

const createBooking = async (req, res, next) => {
  try {
    const result = await BookingServices.createBooking(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Booking created successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllBookings = async (req, res, next) => {
  try {
    const result = await BookingServices.getAllBookings();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Bookings retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await BookingServices.getBookingById(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Booking retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await BookingServices.updateBookingById(id, req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Booking updated successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await BookingServices.deleteBookingById(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Booking deleted successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getBookingsByTourist = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id, "bookings.controller.js", 82);
    const result = await BookingServices.getBookingsByTourist(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tourist bookings retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getBookingsByGuide = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await BookingServices.getBookingsByGuide(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Guide bookings retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const BookingControllers = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
  getBookingsByTourist,
  getBookingsByGuide,
};
