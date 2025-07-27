import { User } from "../users/users.model.js";
import { TourGuideRequest } from "./tourGuideRequest.model.js";

const createTourGuideRequest = async (data) => {
  const existUser = await User.findById({ _id: data.userId });
  if (!existUser) throw new Error("User not found");

  const existingGuide = await TourGuideRequest.findOne({ userId: data.userId });
  if (existingGuide)
    throw new Error("You already Applied or you already a tour guide ");

  return await TourGuideRequest.create(data);
};

const getAllTourGuideRequests = async () => {
  return await TourGuideRequest.find().populate(
    "userId",
    "name email photo role",
  );
};

const getTourGuideRequestById = async (id) => {
  return await TourGuideRequest.findById(id).populate("userId");
};

const getTourGuideRequestByUserId = async (userId) => {
  return await TourGuideRequest.findOne({ userId }).populate("userId");
};

const updateTourGuideRequestStatus = async (id, status) => {
  console.log(id, status, " id status tourGuideRequest.service.js", 51);
  const res = await TourGuideRequest.findByIdAndUpdate(
    id,
    { status: status },
    { new: true },
  );

  console.log(res, "tourGuideRequest.service.js", 27);

  if (res?.status === "accepted") {
    const userRoleChanged = await User.findByIdAndUpdate(
      res.userId,
      { role: "tour-guide" },
      { new: true },
    );

    console.log(
      userRoleChanged,
      "user role changed tourGuideRequest.service.js",
      35,
    );
  }

  return res;
};

const deleteTourGuideRequest = async (id) => {
  const res = await TourGuideRequest.findByIdAndDelete(id);
  if (!res) throw new Error("Guide not found");
  return res;
};

//  NEW: Get 3 random accepted tour guides and all accepted tour guides
const getRandomAcceptedTourGuides = async (limit = 6) => {
  const pipeline = [{ $match: { status: "accepted" } }];

  if (limit !== "all") {
    pipeline.push({ $sample: { size: Number(limit) } });
  }

  pipeline.push(
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $project: {
        _id: 1,
        bio: 1,
        languages: 1,
        expertise: 1,
        status: 1,
        createdAt: 1,
        "user.name": 1,
        "user.email": 1,
        "user.photo": 1,
      },
    },
  );

  return await TourGuideRequest.aggregate(pipeline);
};
export const TourGuideRequestServices = {
  createTourGuideRequest,
  getAllTourGuideRequests,
  getTourGuideRequestById,
  updateTourGuideRequestStatus,
  deleteTourGuideRequest,
  getRandomAcceptedTourGuides,
  getTourGuideRequestByUserId,
};
