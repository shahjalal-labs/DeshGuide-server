// src/App/modules/packages/packages.route.js
import express from "express";
import { PackageControllers } from "./packages.controller.js";

const router = express.Router();

router.get("/", PackageControllers.getAllPackages);
router.post("/", PackageControllers.createPackage);
router.get("/random", PackageControllers.getRandomPackages);
router.get("/:id", PackageControllers.getSinglePackage);
router.patch("/:id", PackageControllers.updatePackage);
router.delete("/:id", PackageControllers.deletePackage);

export const PackageRoutes = router;
