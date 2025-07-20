import { Booking } from "./bookings.model.js";

// Create a new booking
export const createBooking = async (bookingData) => {
  const result = await Booking.create(bookingData);
  return result;
};

// Get all bookings (with optional filters)
const getAllBookings = async (filter = {}) => {
  const result = await Booking.find(filter).populate(
    "packageId touristId guideId",
  );
  return result;
};

// Get a single booking by ID
const getBookingById = async (id) => {
  const result = await Booking.findById(id).populate(
    "packageId touristId guideId",
  );
  return result;
};

// Update booking by ID
const updateBookingById = async (id, updateData) => {
  const result = await Booking.findByIdAndUpdate(id, updateData, { new: true });
  return result;
};

// Delete booking by ID
const deleteBookingById = async (id) => {
  const result = await Booking.findByIdAndDelete(id);
  return result;
};

// Get bookings by touristId (dashboard usage)
const getBookingsByTourist = async (touristId) => {
  const result = await Booking.find({ touristId }).populate("packageId");
  return result;
};

// Get bookings by guideId (for guides)
const getBookingsByGuide = async (guideId) => {
  const result = await Booking.find({ guideId }).populate(
    "packageId touristId",
  );
  return result;
};
