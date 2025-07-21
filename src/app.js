import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { notFound } from "./App/middlewires/notFound.js";
import globalErrorHandler from "./App/middlewires/globalError.js";
import { corsOptions } from "./App/config/corsOptions.js";
import { routes } from "./App/routes/routes.js";

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// ✅ Global API prefix: /api/v1
routes.forEach(({ path, route }) => {
  app.use(`/api/v1${path}`, route);
});

app.get("/", (req, res) => {
  res.send("Assalamu alaikum, Welcome to the DeshGuide server !");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;

/* import express from "express";
import cors from "cors";
import { notFound } from "./App/middlewires/notFound.js";
import globalErrorHandler from "./App/middlewires/globalError.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { corsOptions } from "./App/config/corsOptions.js";
import { routes } from "./App/routes/routes.js";
dotenv.config();

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
// Dynamic Route Mounting
routes.forEach(({ path, route }) => {
  app.use(path, route);
});

app.get("/", (req, res) => {
  res.send("Assalamu alaikum, Welcome to the DeshGuide server !");
});

app.use(globalErrorHandler);
app.use(notFound);
export default app; */

// server.js or app.js
