// src/App/modules/packages/packages.controller.js
import sendResponse from "../../utils/sendResponse.js";
import { PackageServices } from "./packages.service.js";

const createPackage = async (req, res, next) => {
  try {
    const result = await PackageServices.createPackage(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Package created successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllPackages = async (req, res, next) => {
  try {
    const result = await PackageServices.getAllPackages();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Packages retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSinglePackage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PackageServices.getPackageById(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Package retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getRandomPackages = async (req, res, next) => {
  try {
    // allow client to override sample size via query ?size=5
    const size = parseInt(req.query.size, 10) || 3;
    const result = await PackageServices.getRandomPackages(size);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: `${size} random packages`,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updatePackage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PackageServices.updatePackage(id, req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Package updated successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deletePackage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PackageServices.deletePackage(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Package deleted successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const PackageControllers = {
  createPackage,
  getAllPackages,
  getSinglePackage,
  updatePackage,
  deletePackage,
  getRandomPackages,
};
