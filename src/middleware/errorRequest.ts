import type { ErrorRequestHandler } from 'express';
import createError from 'http-errors';
import httpStatus from 'http-status-codes';
import { ErrorRo } from 'src/types/responseObject';
import { loggerDev } from 'src/utils/logger';

const errorRequest: ErrorRequestHandler = (err, req, res, _) => {
  // If the error is not an HTTP error, the whole object is printed through console.error
  if (!createError.isHttpError(err)) {
    loggerDev.error(err);
  }
  const status = err.status ?? httpStatus.INTERNAL_SERVER_ERROR;
  res.status(status).send(ErrorRo(status, err.message));
};

export { errorRequest };

export default errorRequest;
