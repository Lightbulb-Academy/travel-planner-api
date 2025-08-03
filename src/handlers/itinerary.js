import { Router } from "express";
import { createItinerary } from "../services/itinerary.js";
import { createItineraryValidator } from "../validators/itinerary.js";
import { useValidator } from "../middlewares/useValidator.js";

const router = Router();

router.post("/", useValidator(createItineraryValidator), createItinerary);

export default router;
