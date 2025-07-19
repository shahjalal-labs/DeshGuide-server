import Joi from "joi";

const createAssignmentSchema = Joi.object({
  title: Joi.string().min(5).required().messages({
    "string.base": "Title must be a string",
    "string.min": "Title must be at least 5 characters",
    "any.required": "Title is required",
  }),

  description: Joi.string().min(20).required().messages({
    "string.base": "Description must be a string",
    "string.min": "Description must be at least 20 characters",
    "any.required": "Description is required",
  }),

  marks: Joi.number().min(1).required().messages({
    "number.base": "Marks must be a number",
    "number.min": "Marks must be at least 1",
    "any.required": "Marks are required",
  }),

  thumbnailUrl: Joi.string().uri().required().messages({
    "string.uri": "Thumbnail must be a valid URL",
    "any.required": "Thumbnail URL is required",
  }),

  difficulty: Joi.string().valid("easy", "medium", "hard").required().messages({
    "any.only": "Difficulty must be one of easy, medium, or hard",
    "any.required": "Difficulty is required",
  }),

  dueDate: Joi.date().greater("now").required().messages({
    "date.base": "Due Date must be a valid date",
    "date.greater": "Due Date must be in the future",
    "any.required": "Due Date is required",
  }),

  creatorEmail: Joi.string().email().required(),
});

const updateAssignmentSchema = Joi.object({
  title: Joi.string().min(5),
  description: Joi.string().min(20),
  marks: Joi.number().min(1),
  thumbnailUrl: Joi.string().uri(),
  difficulty: Joi.string().valid("easy", "medium", "hard"),
  dueDate: Joi.date().greater("now"),
}).min(1); // require at least one field for update

export const AssignmentsValidationSchema = {
  createAssignmentSchema,
  updateAssignmentSchema,
};
