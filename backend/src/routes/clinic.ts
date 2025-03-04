import { Router } from 'express';

import { validateReqBody } from '@/middleware/validator';

import { createPatient } from '@/controllers/clinic';
import { createPatientSchema } from '@/schema/clinic';

const router = Router();

router.post(
  '/patient',
  validateReqBody(createPatientSchema),
  createPatient
);

export default router;
