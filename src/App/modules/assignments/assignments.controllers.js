import sendResponse from "../../utils/sendResponse.js";
import { AssignmentServices } from "./assignments.service.js";

const createAssignment = async (req, res, next) => {
  try {
    const result = await AssignmentServices.createAssignmentIntoDB(req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Assignment created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/* const getAllAssignments = async (req, res, next) => {
  try {
    const result = await AssignmentServices.getAllAssignmentsFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "All assignments retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
}; */

const getAllAssignments = async (req, res, next) => {
  try {
    const { difficulty, search } = req.query;

    const filters = {};
    if (difficulty) filters.difficulty = difficulty;
    if (search) filters.searchTerm = search;

    const result = await AssignmentServices.getAllAssignmentsFromDB(filters);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Assignments retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleAssignment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await AssignmentServices.getAssignmentByIdFromDB(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Assignment retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateAssignment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await AssignmentServices.updateAssignmentIntoDB(
      id,
      req.body,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Assignment updated successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAssignment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { email } = req.body;
    console.log(email, "assignments.controllers.js", 70);
    const result = await AssignmentServices.deleteAssignmentFromDB(id, email);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Assignment deleted successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AssignmentControllers = {
  createAssignment,
  getAllAssignments,
  getSingleAssignment,
  deleteAssignment,
  updateAssignment,
};
