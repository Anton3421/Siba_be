import {
  validateDescriptionObl,
  validateId,
  validateNameObl,
} from './index.js';

export const validateDepartmentPost = [
  ...validateNameObl,
  ...validateDescriptionObl,
];

export const validateDepartmentPut = [...validateDepartmentPost, ...validateId];
