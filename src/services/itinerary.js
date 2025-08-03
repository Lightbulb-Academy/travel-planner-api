import asyncHandler from "express-async-handler";
import Itinerary from "../models/itinerary.js";
import Trip from "../models/trip.js";

export const createItinerary = asyncHandler(async (req, res) => {
  const { tripId, title, description, activities, date } = req.body;

  const trip = await Trip.findOne({ _id: tripId, user: req.user.userId });

  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }

  if (new Date(date) < trip.startDate || new Date(date) > trip.endDate) {
    res.status(400);
    throw new Error("Itinerary date should be within the trip date range");
  }

  const itinerary = await Itinerary.create({
    trip: tripId,
    title,
    description,
    activities,
    date,
  });

  res.status(201).json(itinerary);
});
