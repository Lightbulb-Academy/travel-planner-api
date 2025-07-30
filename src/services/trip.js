import asyncHandler from "express-async-handler";
import Trip from "../models/trip.js";

const create = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const trip = await Trip.create({ ...req.body, user: userId });
  res.status(201).json(trip);
});

export { create };
