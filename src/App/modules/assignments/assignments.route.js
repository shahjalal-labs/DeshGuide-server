import { AssignmentControllers } from "./assignments.controllers.js";

import express from "express";
import validateRequest from "../../utils/validateRequest.js";
import { AssignmentsValidationSchema } from "./assignments.validation.js";
// import { verifyToken } from "../auth/jwt.js";

const router = express.Router();

// Create a new assignment
router.post(
  "/create-assignment",
  validateRequest(AssignmentsValidationSchema.createAssignmentSchema),
  AssignmentControllers.createAssignment,
);

// Get all assignments
router.get("/", AssignmentControllers.getAllAssignments);

// Get a single assignment by ID
router.get("/:id", AssignmentControllers.getSingleAssignment);
router.patch(
  "/update-assignment/:id",
  validateRequest(AssignmentsValidationSchema.updateAssignmentSchema),
  AssignmentControllers.updateAssignment,
);

// Delete an assignment by ID
router.delete("/delete-assignment/:id", AssignmentControllers.deleteAssignment);

export const AssignmentRoutes = router;
