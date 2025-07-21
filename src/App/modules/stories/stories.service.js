import { Story } from "./stories.model.js";

const createStory = async (data) => {
  return await Story.create(data);
};

const getAllStories = async () => {
  return await Story.find().sort({ createdAt: -1 });
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

export const StoryService = {
  createStory,
  getAllStories,
  getStoryById,
  deleteStory,
};
