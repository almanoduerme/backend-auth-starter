import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDatabase from "./databases/mongodb/mongo.connect";
import { authenticate, errorHandler } from "./middleware";
import { authRoutes, sessionRoutes, userRoutes } from "./modules";
import { APP_ORIGIN, NODE_ENV, PORT } from "./config/env";
import { OK } from "./constants/http";

const app = express();

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: APP_ORIGIN, credentials: true }));
app.use(cookieParser());

// health check
app.get("/", (_, res) => {
  return res.status(OK).json({ status: "health check ok" });
});

// auth routes
app.use("/auth", authRoutes);

// protected routes
app.use("/user", authenticate, userRoutes);
app.use("/sessions", authenticate, sessionRoutes);

// error handler
app.use(errorHandler);

// start the server and connect to the database
app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT} in ${NODE_ENV} environment`);
  try {
    await connectToDatabase();
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
});