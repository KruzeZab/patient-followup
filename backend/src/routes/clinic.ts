import { Router } from 'express';

import {
  createPatientSchema,
  updateFollowUpStatusSchema,
} from '../schema/clinic';
import {
  createPatient,
  fetchFollowUp,
  fetchFollowUps,
  updateFollowUpStatus,
} from '../controllers/clinic';
import { validateReqBody } from '../middleware/validator';

const router = Router();

router.post(
  '/patients',
  validateReqBody(createPatientSchema),
  createPatient
);

router.get('/follow-ups', fetchFollowUps);

router.get('/follow-up/:token', fetchFollowUp);

router.patch(
  '/follow-ups',
  validateReqBody(updateFollowUpStatusSchema),
  updateFollowUpStatus
);

export default router;
