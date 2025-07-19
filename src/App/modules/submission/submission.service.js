import { Submission } from "./submission.model.js";

const getSubmissionByIdFromDB = async (id) => {
  return await Submission.findById(id).populate("assignmentId");
};

// Create submission
const submitAssignmentToDB = async (payload) => {
  console.log(payload, "submission.service.js", 9);
  // assignmentId;
  if (!payload?.assignmentId) {
    throw new Error("assignmentId is required");
  }
  return await Submission.create(payload);
};

// Get own submissions
const getMySubmissionsFromDB = async (email) => {
  return await Submission.find({ studentEmail: email }).populate(
    "assignmentId",
  );
};

// Get pending submissions (exclude own)
const getPendingSubmissionsFromDB = async () => {
  return await Submission.find({
    status: "pending",
    // studentEmail: { $ne: email },
  }).populate("assignmentId");
};

// Mark/Evaluate submission
const evaluateSubmissionInDB = async (
  id,
  obtainedMarks,
  feedback,
  evaluatorEmail,
) => {
  const submission = await Submission.findById(id);
  if (submission?.studentEmail === evaluatorEmail) {
    throw new Error("You cannot evaluate your own submission");
  }

  return await Submission.findByIdAndUpdate(
    id,
    {
      status: "completed",
      obtainedMarks,
      feedback,
      evaluatedBy: evaluatorEmail,
    },
    { new: true },
  );
};

export const SubmissionServices = {
  submitAssignmentToDB,
  getMySubmissionsFromDB,
  getPendingSubmissionsFromDB,
  evaluateSubmissionInDB,
  getSubmissionByIdFromDB,
};
