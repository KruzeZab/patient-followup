import HttpStatus from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

import loggerWithNameSpace from '@/util/logger';

import NotFoundError from '@/error/notFoundError';
import BadRequestError from '@/error/badRequestError';

const logger = loggerWithNameSpace('ErrorHandler');

/**
 * Error response middleware for 404 not found. This middleware function should be at the very bottom of the stack.
 *
 */
export function notFoundError(_req: Request, res: Response) {
  res.status(HttpStatus.NOT_FOUND).json({
    message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
  });
}

export function genericErrorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (error.stack) {
    logger.error(error.stack);
  }

  if (error instanceof BadRequestError) {
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: error.message });
  }

  if (error instanceof NotFoundError) {
    res.status(HttpStatus.NOT_FOUND).json({ message: error.message });
  }

  res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .json({ message: error.message });
}
