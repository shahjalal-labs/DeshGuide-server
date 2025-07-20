// src/App/modules/users/users.route.js
import express from "express";
import {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from "./users.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
