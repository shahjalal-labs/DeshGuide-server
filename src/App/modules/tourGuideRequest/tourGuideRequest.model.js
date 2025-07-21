import mongoose from "mongoose";

const tourGuideRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    cvLink: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

export const TourGuideRequest = mongoose.model(
  "TourGuideRequest",
  tourGuideRequestSchema,
);
