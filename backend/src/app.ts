import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "./config/env";
import { errorHandler, notFound } from "./middleware/error.middleware";
import apiRouter from "./routes";

const app = express();
app.get("/", (req, res) => {
  res.send("Taskflow Backend Running Successfully 🚀");
});

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://taskflow-alpha-six.vercel.app",
    ],
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1", apiRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
