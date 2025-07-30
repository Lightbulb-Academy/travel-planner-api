import { Router } from "express";
import packageList from "./packageList.js";
import user from "./user.js";
import auth from "./auth.js";
import trip from "./trip.js";

const router = Router();

router.use("/package-lists", packageList);
router.use("/users", user);
router.use("/auth", auth);
router.use("/trips", trip);

export default router;
