import asyncHandler from "express-async-handler";
import PackageList from "../models/packageList.js";
import Trip from "../models/trip.js";

// old - http://localhost:5000/package-lists
// new - http://localhost:5000/package-lists/:tripId
export const create = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const trip = await Trip.findOne({
    _id: req.params.tripId,
    user: req.user.userId,
  });

  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }

  const packageList = await PackageList.create({ name, trip: trip._id });
  res.status(201).json(packageList);
});

export const findAll = asyncHandler(async (req, res) => {
  const trip = await Trip.findOne({
    _id: req.params.tripId,
    user: req.user.userId,
  });

  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }

  const packageLists = await PackageList.find({
    trip: req.params.tripId,
  });

  res.status(200).json(packageLists);
});

export const findById = asyncHandler(async (req, res) => {
  const { id, tripId } = req.params;

  const trip = await Trip.findOne({
    _id: tripId,
    user: req.user.userId,
  });

  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }

  const packageList = await PackageList.findOne({
    _id: id,
    trip: tripId,
  });

  if (!packageList) {
    res.status(404);
    throw new Error("Package list not found");
  }

  res.status(200).json(packageList);
});

export const update = asyncHandler(async (req, res) => {
  const { id, tripId } = req.params;
  const trip = await Trip.findOne({
    _id: tripId,
    user: req.user.userId,
  });

  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }

  const packageList = await PackageList.findOneAndUpdate(
    {
      _id: id,
      trip: tripId,
    },
    {
      ...(req.body.name && { name: req.body.name }),
      ...(req.body.completed && { completed: req.body.completed }),
    },
    { new: true }
  );

  if (!packageList) {
    res.status(404);
    throw new Error("Package list not found");
  }
  res.status(200).json(packageList);
});

export const remove = asyncHandler(async (req, res) => {
  const { id, tripId } = req.params;
  const trip = await Trip.findOne({
    _id: tripId,
    user: req.user.userId,
  });

  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }

  const packageList = await PackageList.findOneAndDelete({
    _id: id,
    trip: tripId,
  });

  if (!packageList) {
    res.status(404);
    throw new Error("Package list not found");
  }

  res.status(200).json({ message: "Package list deleted" });
});
