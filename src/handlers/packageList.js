import { Router } from "express";
import {
  create,
  findAll,
  findById,
  update,
  remove,
} from "../services/packageList.js";

const router = Router();

router.post("/", create);
router.get("/", findAll);
router.get("/:id", findById);
router.patch("/:id", update);
router.delete("/:id", remove);

export default router;
