import { Router } from "express";
import { create } from "../services/user.js";

const router = Router();

router.post("/", create);

export default router;
