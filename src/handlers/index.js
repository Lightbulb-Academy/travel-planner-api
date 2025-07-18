import { Router } from "express";
import packageList from "./packageList.js";

const router = Router();

router.use("/package-lists", packageList);

export default router;
