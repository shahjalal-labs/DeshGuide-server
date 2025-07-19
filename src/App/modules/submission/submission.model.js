import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    assignmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
      required: true,
    },
    studentEmail: { type: String, required: true },
    googleDocLink: { type: String, required: true },
    notes: { type: String },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    obtainedMarks: { type: Number },
    feedback: { type: String },
    evaluatedBy: { type: String }, // evaluator email
  },
  { timestamps: true },
);

export const Submission = mongoose.model("Submission", submissionSchema);
