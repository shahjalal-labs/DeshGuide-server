// src/App/modules/packages/packages.service.js
import { Package } from "./packages.model.js";

const createPackage = async (data) => {
  return await Package.create(data);
};

const getAllPackages = async () => {
  return await Package.find().sort({ createdAt: -1 });
};

const getPackageById = async (id) => {
  return await Package.findById(id);
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
  return await Package.findByIdAndDelete(id);
};

export const PackageServices = {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
};
