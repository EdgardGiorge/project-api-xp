const dto = require('../helpers/validations');


validate = (req, res, next) => {
  const objectToValidate = req.baseUrl.slice(1);

  const { error } = dto[objectToValidate].validate(req.body, { abortEarly: false });

  if (!error) return next();

  const { type, message } = error.details[0];

  const STATUS_CODE = {
    'any.required': 400,
    'string.min': 422,
    'number.min': 422,
  };

   res.status(STATUS_CODE[type]).json({ message });
  
  
  
  // if (error.message.includes('is required')) {
  //   return next({ status: 400, message: error.details[0].message });
  // }

  // return next({ status: 422, message: error.message });
};

module.exports = validate;