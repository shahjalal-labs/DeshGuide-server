import express from "express";
import { StoryController } from "./stories.controller.js";

const router = express.Router();

router.post("/", StoryController.createStory);
router.get("/", StoryController.getAllStories);
router.get("/user/:userId", StoryController.getStoriesByUserId);
router.patch("/:id", StoryController.updateStoryById);

router.get("/:id", StoryController.getSingleStory);
router.delete("/:id", StoryController.deleteStory);

export const StoryRoutes = router;
