import { NextFunction, Request, Response } from 'express';
import dto from '../helpers/validations';

type UrlOptions = 'ativos';

export default (req: Request, _res: Response, next: NextFunction) => {
  const objectToValidate = req.baseUrl.slice(1) as UrlOptions;

  const { error } = dto[objectToValidate].validate(req.body, { abortEarly: false });

  if (!error) return next();

  if (error.message.includes('is required')) {
    return next({ status: 400, message: error.details[0].message });
  }

  return next({ status: 422, message: error.message });
};