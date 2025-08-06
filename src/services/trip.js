import asyncHandler from "express-async-handler";
import Trip from "../models/trip.js";
import { generateToken } from "./auth.js";
import { sendMail } from "../utils/sendMail.js";

const create = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const trip = await Trip.create({ ...req.body, user: userId });
  res.status(201).json(trip);
});

const findAll = asyncHandler(async (req, res) => {
  const trips = await Trip.find({ user: req.user.userId });
  res.status(200).json(trips);
});

const findById = asyncHandler(async (req, res) => {
  const trip = await Trip.findOne({
    _id: req.params.id,
    user: req.user.userId,
  });
  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }
  res.status(200).json(trip);
});

const update = asyncHandler(async (req, res) => {
  const trip = await Trip.findOneAndUpdate(
    { _id: req.params.id, user: req.user.userId },
    {
      ...(req.body.title && { title: req.body.title }),
      ...(req.body.description && { description: req.body.description }),
      ...(req.body.startDate && { startDate: req.body.startDate }),
      ...(req.body.endDate && { endDate: req.body.endDate }),
      ...(req.body.destinations && { destinations: req.body.destinations }),
      ...(req.body.budget && { budget: req.body.budget }),
    },
    { new: true }
  );
  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }
  res.status(200).json(trip);
});

const remove = asyncHandler(async (req, res) => {
  const trip = await Trip.findOneAndDelete({
    _id: req.params.id,
    user: req.user.userId,
  });
  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }
  res.status(200).json({ message: "Trip deleted successfully" });
});

const addExpenses = asyncHandler(async (req, res) => {
  const trip = await Trip.findOne({
    _id: req.params.id,
    user: req.user.userId,
  });

  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }

  const date = req.body.date || new Date();
  trip.budget.expenses.push({
    ...req.body,
    date,
  });

  trip.budget.spent += req.body.amount || 0;
  await trip.save();

  res.status(200).json(trip);
});

const inviteCollaborator = asyncHandler(async (req, res) => {
  const trip = await Trip.findOne({
    _id: req.params.id,
    user: req.user.userId,
  });

  if (!trip) {
    res.status(404);
    throw new Error("Trip not found");
  }
  const token = await generateToken(trip._id);
  const intivationLink = `http://localhost:5000/trips/${trip._id}/invite/accept?token=${token}`;
  await sendMail(req.body.email, "Invitation to collaborate", intivationLink);
  res.status(200).json({ message: "Invitation sent successfully" });
});

export {
  create,
  findAll,
  findById,
  update,
  remove,
  addExpenses,
  inviteCollaborator,
};
