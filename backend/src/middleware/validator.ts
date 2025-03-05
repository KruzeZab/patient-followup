import { Schema } from 'joi';
import { NextFunction } from 'express';

import BadRequestError from '../error/badRequestError';

export function validateReqQuery(schema: Schema) {
  return (req: any, _res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.query);

    if (error) {
      return next(new BadRequestError(error.message));
    }

    req.query = value;

    next();
  };
}

export function validateReqBody(schema: Schema) {
  return (req: any, _res: any, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      return next(new BadRequestError(error.message));
    }

    req.body = value;

    next();
  };
}
