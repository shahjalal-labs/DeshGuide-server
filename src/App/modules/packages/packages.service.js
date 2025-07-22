// src/App/modules/packages/packages.service.js

import { Booking } from "../bookings/bookings.model.js";
import { Package } from "./package.model.js";

const createPackage = async (data) => {
  return await Package.create(data);
};

const getAllPackages = async () => {
  return await Package.find().sort({ createdAt: -1 });
};

const getPackageById = async (id) => {
  return await Package.findById(id);
};
const getRandomPackages = async (size = 3) => {
  // Use aggregation $sample
  const samples = await Package.aggregate([{ $sample: { size } }]);
  return samples;
};
const updatePackage = async (id, updatedData) => {
  return await Package.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
};

const deletePackage = async (id) => {
  const pkg = await Package.findById(id);
  if (!pkg) throw new Error("Package not found");

  // Delete all bookings related to this package
  await Booking.deleteMany({ packageId: id });

  // Delete the package
  const deletedPackage = await Package.findByIdAndDelete(id);

  return deletedPackage;
};

export const PackageServices = {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
  getRandomPackages,
};
