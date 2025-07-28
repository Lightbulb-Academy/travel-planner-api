import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { createUser } from "./user.js";

const generateToken = asyncHandler(async (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" });
});

const register = asyncHandler(async (req, res) => {
  const user = await createUser(req.body);
  const token = await generateToken(user._id);
  res.status(201).json({ token });
});

export { generateToken, register };
