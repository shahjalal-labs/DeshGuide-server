// src/App/modules/tourGuideRequest/tourGuideRequest.controller.js

import sendResponse from "../../utils/sendResponse.js";
import { TourGuideRequestServices } from "./tourGuideRequest.service.js";

const createRequest = async (req, res, next) => {
  try {
    const result = await TourGuideRequestServices.createTourGuideRequest(
      req.body,
    );
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Tour guide created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllRequests = async (req, res, next) => {
  try {
    const result = await TourGuideRequestServices.getAllTourGuideRequests();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "All guides fetched",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getRequestById = async (req, res, next) => {
  try {
    const result = await TourGuideRequestServices.getTourGuideRequestById(
      req.params.id,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tour guide fetched",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getRandomAcceptedTourGuides = async (req, res, next) => {
  try {
    const { limit } = req.query; // get from URL like ?limit=3 or ?limit=all

    const guides = await TourGuideRequestServices.getRandomAcceptedTourGuides(
      limit === "all" ? "all" : Number(limit) || 6, // default to 6 if invalid
    );

    res.status(200).json({
      success: true,
      message: `${limit || 6} accepted tour guides`,
      data: guides,
    });
  } catch (error) {
    next(error);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const result = await TourGuideRequestServices.updateTourGuideRequestStatus(
      req.params.id,
      req.body.status,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Status updated",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteRequest = async (req, res, next) => {
  try {
    const result = await TourGuideRequestServices.deleteTourGuideRequest(
      req.params.id,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tour guide deleted",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const TourGuideRequestControllers = {
  createRequest,
  getAllRequests,
  getRequestById,
  updateStatus,
  deleteRequest,
  getRandomAcceptedTourGuides,
};
