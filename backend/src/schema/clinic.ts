import Joi from 'joi';

import { IPatient } from '@/interface/clinic';

export const createPatientSchema = Joi.object<IPatient>({
  name: Joi.string().required().messages({
    'any.required': 'Name is required',
    'string.empty': 'Name cannot be empty',
  }),
  typeOfCheckup: Joi.string().required().messages({
    'any.required': 'Type of Checkup is required',
    'string.empty': 'Type of Checkup cannot be empty',
  }),
});
