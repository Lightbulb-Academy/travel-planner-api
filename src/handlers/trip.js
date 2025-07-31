import { Router } from "express";
import { createTripValidator } from "../validators/trip.js";
import {
  create,
  findAll,
  findById,
  update,
  remove,
  addExpenses,
} from "../services/trip.js";
import { useValidator } from "../middlewares/useValidator.js";

const router = Router();

router.post("/", useValidator(createTripValidator), create);
router.get("/", findAll);
router.get("/:id", findById);
router.put("/:id", update);
router.delete("/:id", remove);
router.post("/:id/expenses", addExpenses);

export default router;
