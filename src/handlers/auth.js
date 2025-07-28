import { Router } from "express";
import { register } from "../services/auth.js";
import { useValidator } from "../middlewares/useValidator.js";
import { createUserValidator } from "../validators/user.js";

const router = Router();

router.post("/register", useValidator(createUserValidator), register);

export default router;
