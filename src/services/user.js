import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import { hash } from "bcrypt";

const create = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // add data validation so that none of the fields are empty
  // check if email is properly formatted
  // check if email has already been taken
  // check if password is at least 8 characters long
  const user = await User.create({
    name,
    email,
    password: await hash(password, 10),
  });
  res.status(201).json(user);
});

export { create };
