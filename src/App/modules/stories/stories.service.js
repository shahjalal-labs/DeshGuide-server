import { Story } from "./stories.model.js";
import { User } from "../users/users.model.js"; // ✅ Import user model

const createStory = async (data) => {
  const { userId } = data;

  // ✅ Validate if userId exists
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("Invalid userId: No user found with this ID.");
  }

  return await Story.create(data);
};

const getAllStories = async () => {
  return await Story.find().sort({ createdAt: -1 });
};

const getStoriesByUserId = async (userId) => {
  return await Story.find({ userId }).sort({ createdAt: -1 });
};

const getStoryById = async (id) => {
  const story = await Story.findById(id);
  if (!story) {
    throw new Error("Story not found");
  }
  return story;
};

const deleteStory = async (id) => {
  const story = await Story.findById(id);
  if (!story) {
    throw new Error("Story not found or already deleted");
  }

  const deleted = await Story.findByIdAndDelete(id);
  if (!deleted) {
    throw new Error("Failed to delete story");
  }

  return deleted;
};

const updateStoryByIdService = async (id, payload) => {
  //  Prevent these fields from being updated
  delete payload.userId;
  delete payload.userName;
  delete payload.userPhoto;

  const updated = await Story.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return updated;
};
export const StoryService = {
  createStory,
  getAllStories,
  getStoryById,
  deleteStory,
  getStoriesByUserId,
  updateStoryByIdService,
};
