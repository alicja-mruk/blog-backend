import { checkObjectId } from './checkIdMongo';
import { errorRequest } from './errorRequest';
import { notFound } from './notFound';

export const middleware = {
  checkObjectId,
  errorRequest,
  notFound,
};
