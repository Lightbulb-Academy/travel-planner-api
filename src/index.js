import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./handlers/index.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
