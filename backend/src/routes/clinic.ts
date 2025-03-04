import { Router } from 'express';

import { validateReqBody } from '@/middleware/validator';

import {
  createPatientSchema,
  updateFollowUpStatusSchema,
} from '@/schema/clinic';

import {
  createPatient,
  fetchFollowUps,
  updateFollowUpStatus,
} from '@/controllers/clinic';

const router = Router();

router.post(
  '/patients',
  validateReqBody(createPatientSchema),
  createPatient
);

router.get('/follow-ups', fetchFollowUps);

router.patch(
  '/follow-ups',
  validateReqBody(updateFollowUpStatusSchema),
  updateFollowUpStatus
);

export default router;
