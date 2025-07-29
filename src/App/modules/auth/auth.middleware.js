import { verifyToken } from "./jwt.js";

export const authenticateUser = (req, res, next) => {
  // Check both headers and cookies
  const token = req.headers.authorization?.split(" ")[1] || req.cookies?.token;

  if (!token) {
    return res.status(401).json({
      code: "MISSING_TOKEN",
      message: "Authentication required",
    });
  }

  try {
    req.user = verifyToken(token);
    next();
  } catch (err) {
    return res.status(401).json({
      code: "INVALID_TOKEN",
      message: err.message,
    });
  }
};
