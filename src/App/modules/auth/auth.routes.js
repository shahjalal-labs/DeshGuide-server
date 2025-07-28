import { Router } from "express";
import { createJwtToken } from "./issueJwt.js";

const router = Router();

router.post("/create-jwt", createJwtToken);
router.post("/clear-jwt", clearJwtToken);
export const AuthRoutes = router;
