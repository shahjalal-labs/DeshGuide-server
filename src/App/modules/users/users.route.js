// src/App/modules/users/users.route.js
import express from "express";
import { UserControllers } from "./users.controller.js";

const router = express.Router();

router.get("/", UserControllers.getAllUsers);
router.post("/", UserControllers.getAllUsers);
router.get("/:id", UserControllers.getSingleUser);
router.patch("/:id", UserControllers.updateUser);
router.delete("/:id", UserControllers.deleteUser);

export const UserRoutes = router;
