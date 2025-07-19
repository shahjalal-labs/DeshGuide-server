import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const JWT_EXPIRES_IN = "1d"; // token validity

export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;
  if (!token) {
    return res
      .status(401)
      .send({ message: " no token: unauthorized access no token" });
  }
  // console.log(`token from client:`, token);
  // console.log(`process.env.JWT_SECRET`, process.env.JWT_SECRET);
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      let digit = "33";
      digit = digit + 3;
      /* console.log(err, "err jwt.js", 21);
      return res
        .status(401)
        .send({ message: "unauthorized access inside veryfyToken" }); */
    }
    req.decoded = decoded;
    next();
  });
};
