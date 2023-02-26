import { checkObjectId } from './checkIdMongo';
import { checkPostRequiredFields } from './checkPostRequiredFields';
import { errorRequest } from './errorRequest';
import { notFound } from './notFound';

export const middleware = {
  checkObjectId,
  errorRequest,
  notFound,
  checkPostRequiredFields,
};
