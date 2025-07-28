// import dotenv from "dotenv";
// import jwt from "jsonwebtoken";
// dotenv.config();
//
// const JWT_SECRET = process.env.JWT_SECRET;
// const JWT_EXPIRES_IN = "1d"; // token validity
//
// export const generateToken = (payload) => {
//   return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
// };
//
// export const verifyTokenPrev = (req, res, next) => {
//   const token = req?.cookies?.token;
//   if (!token) {
//     return res
//       .status(401)
//       .send({ message: " no token: unauthorized access no token" });
//   }
//   // console.log(`token from client:`, token);
//   // console.log(`process.env.JWT_SECRET`, process.env.JWT_SECRET);
//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       let digit = "33";
//       digit = digit + 3;
//       /* console.log(err, "err jwt.js", 21);
//       return res
//         .status(401)
//         .send({ message: "unauthorized access inside veryfyToken" }); */
//     }
//     req.decoded = decoded;
//     next();
//   });
// };
//
// // Fix the verifyToken function (current one has issues)
// export const verifyToken = (token) => {
//   try {
//     return jwt.verify(token, JWT_SECRET);
//   } catch (err) {
//     throw new Error("Invalid token");
//   }
// };
//
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

/**
 * Generates a JWT token with the given payload
 * @param {Object} payload - Data to include in the token
 * @returns {String} JWT token
 */
export const generateToken = (payload) => {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
    algorithm: "HS256", // Explicitly specify algorithm
  });
};

/**
 * Verifies a JWT token from Authorization header
 * @param {String} token - JWT token to verify
 * @returns {Object} Decoded token payload
 * @throws {Error} If token is invalid
 */
export const verifyToken = (token) => {
  if (!token) {
    throw new Error("No token provided");
  }

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  try {
    return jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] });
  } catch (err) {
    // Enhanced error messages
    let errorMessage = "Invalid token";
    if (err.name === "TokenExpiredError") {
      errorMessage = "Token expired";
    } else if (err.name === "JsonWebTokenError") {
      errorMessage = "Malformed token";
    }
    throw new Error(errorMessage);
  }
};

/**
 * Middleware to authenticate requests using Bearer token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware
 */
export const authenticateUser = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing or invalid",
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    req.user = decoded; // Attach user to request
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: err.message || "Authentication failed",
    });
  }
};

/**
 * @deprecated Old cookie-based verification (keep for reference)
 */
export const verifyTokenPrev = (req, res, next) => {
  console.warn("verifyTokenPrev is deprecated - use authenticateUser instead");
  const token = req?.cookies?.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

  try {
    const decoded = verifyToken(token);
    req.decoded = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: err.message || "Invalid token",
    });
  }
};
