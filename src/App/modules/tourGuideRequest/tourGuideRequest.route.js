import express from "express";
import { TourGuideRequestControllers } from "./tourGuideRequest.controller.js";

const router = express.Router();

router.post("/", TourGuideRequestControllers.createRequest);
router.get("/", TourGuideRequestControllers.getAllRequests);
router.get(
  "/random-accepted",
  TourGuideRequestControllers.getRandomAcceptedTourGuides,
);

router.get("/user/:userId", TourGuideRequestControllers.getRequestByUserId);

router.get("/:id", TourGuideRequestControllers.getRequestById);
router.patch("/:id", TourGuideRequestControllers.updateStatus);
router.delete("/:id", TourGuideRequestControllers.deleteRequest);

export const TourGuideRequestRoutes = router;
