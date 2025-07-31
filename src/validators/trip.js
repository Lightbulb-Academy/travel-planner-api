import { body } from "express-validator";

export const createTripValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("startDate")
    .notEmpty()
    .withMessage("Start date is required")
    .isDate()
    .withMessage("Start date must be a date"),
  body("endDate")
    .notEmpty()
    .withMessage("End date is required")
    .isDate()
    .withMessage("End date must be a date")
    .custom((value, { req }) => {
      if (value < req.body.startDate) {
        throw new Error("End date must be after start date");
      }
      return true;
    }),
  body("destinations").isArray().withMessage("Destinations must be an array"),
  body("budget.total").isNumeric().withMessage("Budget must be a number"),
  body("budget.spent").isNumeric().withMessage("Spent amount must be a number"),
  body("budget.expenses")
    .optional()
    .isArray()
    .withMessage("Expenses must be an array"),
  body("budget.expenses.*.name")
    .optional()
    .notEmpty()
    .withMessage("Expense name is required"),
  body("budget.expenses.*.amount")
    .optional()
    .isNumeric()
    .withMessage("Expense amount must be a number"),
];
