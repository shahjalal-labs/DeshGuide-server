import sendResponse from "../../utils/sendResponse.js";
import { SubmissionServices } from "./submission.service.js";

const getSubmissionById = async (req, res, next) => {
  try {
    const result = await SubmissionServices.getSubmissionByIdFromDB(
      req.params.id,
    );
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Submission fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const submitAssignment = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data, "submission.controller.js", 23);

    const result = await SubmissionServices.submitAssignmentToDB(data);
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: "Assignment submitted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getMySubmissions = async (req, res, next) => {
  try {
    const { email } = req.query;
    const result = await SubmissionServices.getMySubmissionsFromDB(email);
    sendResponse(res, {
      success: true,
      message: "Fetched your submitted assignments",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getPendingSubmissions = async (req, res, next) => {
  try {
    const result = await SubmissionServices.getPendingSubmissionsFromDB();
    sendResponse(res, {
      success: true,
      message: "Pending submissions fetched",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const evaluateSubmission = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { obtainedMarks, feedback, evaluatedBy } = req.body;
    if (!evaluatedBy) {
      return sendResponse(res, {
        success: false,
        message: "evaluatorEmail is required",
        statusCode: 400,
      });
    }

    const result = await SubmissionServices.evaluateSubmissionInDB(
      id,
      obtainedMarks,
      feedback,
      evaluatedBy,
    );

    sendResponse(res, {
      success: true,
      message: "Submission marked successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const SubmissionControllers = {
  submitAssignment,
  getMySubmissions,
  getPendingSubmissions,
  evaluateSubmission,
  getSubmissionById,
};
