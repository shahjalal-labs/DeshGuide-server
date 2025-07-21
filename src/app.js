import express from "express";
import cors from "cors";
import { notFound } from "./App/middlewires/notFound.js";
import globalErrorHandler from "./App/middlewires/globalError.js";
import cookieParser from "cookie-parser";
import { AssignmentRoutes } from "./App/modules/assignments/assignments.route.js";
import { AuthRoutes } from "./App/modules/auth/auth.routes.js";
import dotenv from "dotenv";
import { SubmissionRoutes } from "./App/modules/submission/submission.route.js";
import { UserRoutes } from "./App/modules/users/users.route.js";
import { PackageRoutes } from "./App/modules/packages/packages.route.js";
import { corsOptions } from "./App/config/corsOptions.js";
dotenv.config();

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/assignments", AssignmentRoutes);
app.use("/api/v1/submission", SubmissionRoutes);
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/packages", PackageRoutes);
app.use("/api/v1/bookings", BookingRoutes);

app.get("/", (req, res) => {
  res.send("Assalamu alaikum, Welcome to the DeshGuide server !");
});

app.use(globalErrorHandler);
app.use(notFound);
export default app;
