import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Assignment title is required"],
      trim: true,
      minlength: [5, "Title must be at least 5 characters long"],
    },
    description: {
      type: String,
      required: [true, "Assignment description is required"],
      minlength: [20, "Description must be at least 20 characters"],
    },
    marks: {
      type: Number,
      required: [true, "Marks are required"],
      min: [1, "Marks must be at least 1"],
    },
    thumbnailUrl: {
      type: String,
      required: [true, "Thumbnail URL is required"],
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: [true, "Difficulty level is required"],
    },
    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
    },
    creatorEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;
