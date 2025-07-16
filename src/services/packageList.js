import asyncHandler from "express-async-handler";
import PackageList from "../models/packageList";

const create = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const packageList = await PackageList.create({ name });
  res.status(201).json(packageList);
});

export { create };
