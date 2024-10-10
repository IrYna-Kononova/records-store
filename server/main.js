import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";

import connectDB from "./libs/database.js";
import recordsRouter from "./routes/recordsRouter.js";
import usersRouter from "./routes/usersRouter.js";
import cartsRouter from "./routes/cartsRouter.js";
import {
  globalErrorHandler,
  routeNotFound,
} from "./middleware/errorHandlers.js";

await connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.EXPRESS_CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/records", recordsRouter);
app.use("/users", usersRouter);
app.use("/carts", cartsRouter);

app.use(routeNotFound);
app.use(globalErrorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
