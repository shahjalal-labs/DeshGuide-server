import express from "express";
import cors from "cors";
import { notFound } from "./App/middlewires/notFound.js";
import globalErrorHandler from "./App/middlewires/globalError.js";
import cookieParser from "cookie-parser";
import { AssignmentRoutes } from "./App/modules/assignments/assignments.route.js";
import { AuthRoutes } from "./App/modules/auth/auth.routes.js";
import dotenv from "dotenv";
import { SubmissionRoutes } from "./App/modules/submission/submission.route.js";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://edu-verse.surge.sh",
    ], // replace with your frontend URL
    // credentials: true, // if you're using cookies/auth
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/assignments", AssignmentRoutes);
app.use("/api/v1/submission", SubmissionRoutes);

app.get("/", (req, res) => {
  res.send("Assalamu alaikum, Welcome to the EduVers server !");
});

app.use(globalErrorHandler);
app.use(notFound);
export default app;
