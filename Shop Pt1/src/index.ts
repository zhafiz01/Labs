import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productsRouter from "./routes/productsRouter";
import usersRouter from "./routes/usersRouter";

dotenv.config();
const app = express();
app.use(cors());
app.use(json());

app.use("/products", productsRouter);
app.use("/users", usersRouter);

const PORT = process.env.PORT || 6001;
const MONGO_URL = process.env.MONGO_URL || "";

mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Connected at PORT:${PORT}`));
  })
  .catch(err => console.log(`Database connection error: ${err}`));

