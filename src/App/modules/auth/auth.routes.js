/* import { Router } from "express";
import { clearJwtToken, createJwtToken } from "./issueJwt.js";

const router = Router();

router.post("/create-jwt", createJwtToken);
router.post("/clear-jwt", clearJwtToken);
export const AuthRoutes = router; */

import { Router } from "express";
import { createJwtToken, clearJwtToken } from "./issueJwt.js";
import { authenticateUser } from "./auth.middleware.js";

const router = Router();

router.post("/create-jwt", createJwtToken);
router.post("/clear-jwt", authenticateUser, clearJwtToken); // Protected

export const AuthRoutes = router;
