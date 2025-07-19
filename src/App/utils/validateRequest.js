const validateRequest = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error) {
      const errors = error.details.map((detail) => detail.message);
      res
        .status(400)
        .json({
          success: false,
          errorFrom: "Joi validateRequest.js 8",
          errors,
        });
    }
  };
};

export default validateRequest;
