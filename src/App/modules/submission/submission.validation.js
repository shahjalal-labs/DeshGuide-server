import Joi from "joi";

const submitAssignmentSchema = Joi.object({
  assignmentId: Joi.string().required().not(null).messages({
    "string.base": "Assignment ID must be a string",
    "any.required": "Assignment ID is required",
    "any.invalid": "Assignment ID cannot be null",
  }),

  googleDocLink: Joi.string().uri().required().messages({
    "string.uri": "Google Docs link must be a valid URL",
    "any.required": "Google Docs link is required",
  }),
  notes: Joi.string().min(5).required().messages({
    "string.base": "Notes must be a string",
    "string.min": "Notes must be at least 5 characters",
    "any.required": "Notes are required",
  }),
  studentEmail: Joi.string().email().required().messages({
    "string.email": "Student email must be a valid email",
    "any.required": "Student email is required",
  }),
  status: Joi.string().valid("pending", "completed").optional(),
});

const evaluateSubmissionSchema = Joi.object({
  obtainedMarks: Joi.number().min(0).required().messages({
    "number.base": "Obtained marks must be a number",
    "number.min": "Obtained marks cannot be negative",
    "any.required": "Obtained marks are required",
  }),
  feedback: Joi.string().min(5).required().messages({
    "string.base": "Feedback must be a string",
    "string.min": "Feedback must be at least 5 characters",
    "any.required": "Feedback is required",
  }),
  evaluatedBy: Joi.string().min(5).required().messages({
    "string.base": "Feedback must be a string",
    "string.min": "Feedback must be at least 5 characters",
    "any.required": "Feedback is required",
  }),
});

export const SubmissionValidationSchema = {
  submitAssignmentSchema,
  evaluateSubmissionSchema,
};
