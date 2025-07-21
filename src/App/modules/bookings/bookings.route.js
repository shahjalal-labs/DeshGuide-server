// src/App/modules/bookings/bookings.route.js

import express from "express";
import { BookingControllers } from "./bookings.controller.js";

const router = express.Router();

router.post("/", BookingControllers.createBooking);
router.get("/", BookingControllers.getAllBookings);
router.get("/:id", BookingControllers.getSingleBooking);
router.patch("/:id", BookingControllers.updateBooking);
router.delete("/:id", BookingControllers.deleteBooking);

// Additional filters
router.get("/tourist/:id", BookingControllers.getBookingsByTourist);
router.get("/guide/:id", BookingControllers.getBookingsByGuide);

export const BookingRoutes = router;
