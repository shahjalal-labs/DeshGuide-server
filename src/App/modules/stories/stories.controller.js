import sendResponse from "../../utils/sendResponse.js";
import { StoryService } from "./stories.service.js";

const createStory = async (req, res, next) => {
  try {
    const result = await StoryService.createStory(req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Story created successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllStories = async (req, res, next) => {
  try {
    const result = await StoryService.getAllStories();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "All stories retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getStoriesByUserId = async (req, res, next) => {
  try {
    const result = await StoryService.getStoriesByUserId(req.params.userId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Stories by user retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStory = async (req, res, next) => {
  try {
    const result = await StoryService.getStoryById(req.params.id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Story retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStory = async (req, res, next) => {
  try {
    const result = await StoryService.deleteStory(req.params.id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Story deleted successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const StoryController = {
  createStory,
  getAllStories,
  getSingleStory,
  deleteStory,
  getStoriesByUserId,
};
