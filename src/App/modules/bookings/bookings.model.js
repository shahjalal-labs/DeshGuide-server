// /src/App/modules/bookings/bookings.model.js

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    packageName: {
      type: String,
      required: true,
    },
    touristId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    touristName: {
      type: String,
      required: true,
    },
    touristEmail: {
      type: String,
      required: true,
    },
    touristPhoto: {
      type: String,
    },
    guideId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    guideName: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    tourDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "in-review", "accepted", "rejected"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid",
    },
    transactionId: {
      type: String,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
    versionKey: false,
  },
);

export const Booking = mongoose.model("Booking", bookingSchema);
