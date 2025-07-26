import { Booking } from "./bookings.model.js";
import mongoose from "mongoose";

// Create a new booking
/* export const createBooking = async (bookingData) => {
  const result = await Booking.create(bookingData);
  return result;
}; */

import { Package } from "../packages/package.model.js";
import { User } from "../users/users.model.js"; // assuming tourists & guides are users

export const createBooking = async (bookingData) => {
  const { packageId, guideId, touristId } = bookingData;

  // Validate package
  const pkg = await Package.findById(packageId);
  if (!pkg) throw new Error("Invalid packageId — Package not found");

  // Validate guide
  const guide = await User.findById(guideId);
  if (!guide || guide.role !== "tour-guide") {
    throw new Error("Invalid guideId — Guide not found");
  }

  // Validate tourist
  const tourist = await User.findById(touristId);
  if (!tourist || tourist.role !== "tourist") {
    throw new Error("Invalid touristId — Tourist not found");
  }

  // Now create the booking
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
  const result = await Booking.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  return result;
};

// Delete booking by ID
const deleteBookingById = async (id) => {
  const result = await Booking.findByIdAndDelete(id);
  return result;
};

// Get bookings by touristId (dashboard usage)
const getBookingsByTourist = async (touristId) => {
  // const result = await Booking.find({ touristId }).populate("packageId");
  const result = await Booking.find({ touristId });
  return result;
};

// Get bookings by guideId (for guides)
/* const getBookingsByGuide = async (guideId) => {
  const result = await Booking.find({ guideId }).populate(
    "packageId touristId",
  );
  return result;
};
 */

const getBookingsByGuide = async (guideId) => {
  const result = await Booking.aggregate([
    {
      $match: {
        guideId: new mongoose.Types.ObjectId(guideId),
      },
    },
    {
      $addFields: {
        sortOrder: {
          $switch: {
            branches: [
              { case: { $eq: ["$status", "in-review"] }, then: 0 },
              { case: { $eq: ["$status", "accepted"] }, then: 1 },
            ],
            default: 2,
          },
        },
      },
    },
    { $sort: { sortOrder: 1, createdAt: -1 } }, // recent ones first within each group
    {
      $lookup: {
        from: "packages",
        localField: "packageId",
        foreignField: "_id",
        as: "package",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "touristId",
        foreignField: "_id",
        as: "tourist",
      },
    },
    { $unwind: "$package" },
    { $unwind: "$tourist" },
  ]);

  return result;
};

export const BookingServices = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
  getBookingsByTourist,
  getBookingsByGuide,
};
