import Joi from 'joi';

import { FollowUpStatus, IPatient } from '@/interface/clinic';

export const createPatientSchema = Joi.object<IPatient>({
  name: Joi.string().required().messages({
    'any.required': 'Name is required',
    'string.empty': 'Name cannot be empty',
  }),
  typeOfCheckup: Joi.string().required().messages({
    'any.required': 'Type of Checkup is required',
    'string.empty': 'Type of Checkup cannot be empty',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.empty': 'Email cannot be empty',
    'string.email': 'Invalid email format',
  }),
});

export const updateFollowUpStatusSchema = Joi.object({
  followUpId: Joi.string().required().messages({
    'any.required': 'Follow-up ID is required',
    'string.base': 'Follow-up ID must be a string',
  }),
  status: Joi.string()
    .valid(...Object.values(FollowUpStatus))
    .required()
    .messages({
      'any.required': 'Status is required',
      'string.base': 'Status must be a string',
      'any.only': `Status must be one of ${Object.values(
        FollowUpStatus
      ).join(', ')}`,
    }),
});
