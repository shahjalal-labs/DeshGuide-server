import { Router } from "express";
import { createJwtToken } from "./issueJwt.js";

const router = Router();

router.post("/create-jwt", createJwtToken);

export const AuthRoutes = router;
