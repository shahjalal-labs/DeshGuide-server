import express from "express";
import { SubmissionControllers } from "./submission.controller.js";
import validateRequest from "../../utils/validateRequest.js";
import { SubmissionValidationSchema } from "./submission.validation.js";

const router = express.Router();

// 📝 Get submission by id
router.get("/signle/:id", SubmissionControllers.getSubmissionById);

// 📤 Submit an assignment
router.post(
  "/submit-assignment",
  validateRequest(SubmissionValidationSchema.submitAssignmentSchema),
  SubmissionControllers.submitAssignment,
);

// 👤 Get my submitted assignments
router.get("/my-submissions", SubmissionControllers.getMySubmissions);

// 🕒 Get pending submissions (not marked yet)
router.get("/pending-submissions", SubmissionControllers.getPendingSubmissions);

// 📝 Evaluate a submission (give marks + feedback)
router.patch(
  "/evaluate/:id",
  validateRequest(SubmissionValidationSchema.evaluateSubmissionSchema),
  SubmissionControllers.evaluateSubmission,
);

export const SubmissionRoutes = router;
