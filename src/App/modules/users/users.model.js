const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    photoURL: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["tourist", "tour-guide", "admin"],
      default: "tourist",
    },
    last_loggedIn: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt`
  },
);

export const User = mongoose.model("User", userSchema);
