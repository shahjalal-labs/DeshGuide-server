import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

export const generateToken = (payload) => {
  if (!JWT_SECRET) throw new Error("JWT_SECRET not configured");
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
    algorithm: "HS256",
  });
};

export const verifyToken = (token) => {
  if (!token) throw new Error("No token provided");
  if (!JWT_SECRET) throw new Error("JWT_SECRET not configured");

  try {
    return jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] });
  } catch (err) {
    const errors = {
      TokenExpiredError: "Token expired",
      JsonWebTokenError: "Invalid token",
      NotBeforeError: "Token not active",
    };
    throw new Error(errors[err.name] || "Authentication failed");
  }
};
