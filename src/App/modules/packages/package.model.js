// src/models/package.model.js

import mongoose from "mongoose";

const tourPlanSchema = new mongoose.Schema(
  {
    day: { type: Number, required: true },
    activities: { type: String, required: true },
  },
  { _id: false },
);

const packageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    tripType: {
      type: String,
      enum: ["Adventure", "Relaxation", "Cultural", "Nature", "Other"],
      required: true,
    },
    days: { type: Number, required: true },
    location: { type: String, required: true },
    gallery: [{ type: String }],
    tourPlan: [tourPlanSchema],
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  },
);

export const Package = mongoose.model("Package", packageSchema);
