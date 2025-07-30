import { Router } from "express";
import { createTripValidator } from "../validators/trip.js";
import { create } from "../services/trip.js";
import { useValidator } from "../middlewares/useValidator.js";

const router = Router();

router.post("/", useValidator(createTripValidator), create);

export default router;
