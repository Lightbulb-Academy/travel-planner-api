import { Router } from "express";
import { create } from "../services/packageList.js";

const router = Router();

router.post("/", create);

export default router;
