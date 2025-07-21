import asyncHandler from "express-async-handler";
import PackageList from "../models/packageList.js";

const create = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const packageList = await PackageList.create({ name });
  res.status(201).json(packageList);
});

const findAll = asyncHandler(async (req, res) => {
  const packageLists = await PackageList.find();
  res.status(200).json(packageLists);
});

const findById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const packageList = await PackageList.findById(id);
  if (!packageList) {
    res.status(404).json({ message: "Package list not found" });
    return;
  }
  res.status(200).json(packageList);
});

const update = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const packageList = await PackageList.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      ...(req.body.completed && {
        completed: req.body.completed,
      }),
    },
    { new: true }
  );
  if (!packageList) {
    res.status(404).json({ message: "Package list not found" });
    return;
  }
  res.status(200).json(packageList);
});

const remove = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const packageList = await PackageList.findByIdAndDelete(id);
  if (!packageList) {
    res.status(404).json({ message: "Package list not found" });
    return;
  }
  res.status(200).json({ message: "Package list deleted" });
});

export { create, findAll, findById, update, remove };
