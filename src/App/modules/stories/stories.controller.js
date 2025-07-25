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
const updateStoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await StoryService.updateStoryByIdService(id, req.body);

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Story not found" });
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Story updated successfully",
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};
export const StoryController = {
  createStory,
  getAllStories,
  getSingleStory,
  deleteStory,
  getStoriesByUserId,
  updateStoryById,
};
