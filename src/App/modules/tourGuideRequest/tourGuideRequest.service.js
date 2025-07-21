import { TourGuideRequest } from "./tourGuideRequest.model.js";

const createTourGuideRequest = async (data) => {
  const existingGuide = await TourGuideRequest.findOne({
    userId: data.userId,
  });
  if (existingGuide) {
    throw new Error("User already exists");
  }
  return await TourGuideRequest.create(data);
};

const getAllTourGuideRequests = async () => {
  return await TourGuideRequest.find().populate("userId", "name email photo");
};

const getTourGuideRequestById = async (id) => {
  return await TourGuideRequest.findById(id).populate("userId", "name email");
};

const updateTourGuideRequestStatus = async (id, status) => {
  return await TourGuideRequest.findByIdAndUpdate(
    id,
    { status },
    { new: true },
  );
};

const deleteTourGuideRequest = async (id) => {
  const res = await TourGuideRequest.findByIdAndDelete(id);
  if (!res) {
    throw new Error("Guide not found");
  }
  return res;
};

export const TourGuideRequestServices = {
  createTourGuideRequest,
  getAllTourGuideRequests,
  getTourGuideRequestById,
  updateTourGuideRequestStatus,
  deleteTourGuideRequest,
};
