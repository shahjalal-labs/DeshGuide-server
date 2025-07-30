import express from "express";
import { AdminController } from "./admin.controller.js";

const router = express.Router();

// GET /api/v1/admin/stats
router.get("/stats", AdminController.getDashboardStats);

export const AdminRoutes = router;
