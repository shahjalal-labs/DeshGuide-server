/* import { verifyToken } from "./jwt.js";

export const authenticateUser = (req, res, next) => {
  const token = req?.cookies?.token;
  console.log(token, "token from client: auth.middleware.js", 5);
  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      success: false,
      message: "Unauthorized: No token",
    });
  }

  try {
    const decoded = verifyToken(token);
    req.decoded = decoded; // attach user info to request
    next();
  } catch (err) {
    res.status(401).json({
      statusCode: 401,
      success: false,
      message: "verifyToken issue: Unauthorized: Invalid token",
    });
    // next(err);
  }
}; */

import { verifyToken } from "./jwt.js";

export const authenticateUser = (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      statusCode: 401,
      success: false,
      message: "Unauthorized: No token provided",
    });
  }

  const token = authHeader.split(" ")[1]; // Extract token after 'Bearer '

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    return res.status(401).json({
      statusCode: 401,
      success: false,
      message: "Unauthorized: Invalid token",
    });
  }
};
