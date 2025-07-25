import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import { hash } from "bcrypt";

const create = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const user = await User.create({
    name,
    email,
    password: await hash(password, 10),
  });
  res.status(201).json(user);
});

export { create };
