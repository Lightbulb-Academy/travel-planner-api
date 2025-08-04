import { body, param } from "express-validator";

export const createPackageList = [
  param("tripId").trim().notEmpty().withMessage("Trip ID is required"),
  body("name").trim().notEmpty().withMessage("Name is required"),
];
