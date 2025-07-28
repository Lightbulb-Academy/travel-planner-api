import { Router } from "express";
import packageList from "./packageList.js";
import user from "./user.js";

const router = Router();

router.use("/package-lists", packageList);
router.use("/users", user);
router.use("/auth", auth);

export default router;
