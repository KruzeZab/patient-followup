import { Response } from 'express';
import HttpStatus from 'http-status-codes';

import * as clincService from '../services/clinic';

/**
 * Create a patient
 *
 */
export async function createPatient(req: any, res: Response) {
  const { name, typeOfCheckup, email } = req.body;

  await clincService.createPatient(name, email, typeOfCheckup);

  res.status(HttpStatus.CREATED).json({
    message: 'Patient added successfully',
  });
}

/**
 * Fetch all follow ups
 *
 */
export async function fetchFollowUps(req: any, res: Response) {
  const filters = req.query;

  const data = await clincService.fetchFollowUps(filters);

  res.status(HttpStatus.OK).json({
    message: 'Follow ups fetched successfully',
    data,
  });
}

/**
 * Update follow-up status
 *
 */
export async function updateFollowUpStatus(req: any, res: Response) {
  const { followUpId, status } = req.body;

  const updatedFollowUpId = await clincService.updateFollowUpStatus(
    followUpId,
    status
  );

  res.status(HttpStatus.OK).json({
    message: 'Follow-up status updated successfully',
    followUpId: updatedFollowUpId,
  });
}

/**
 * Fetch a single follow up with given token.
 *
 */
export async function fetchFollowUp(req: any, res: Response) {
  const { token } = req.params;

  const data = await clincService.fetchFollowUp(token);

  res.status(HttpStatus.OK).json({
    message: 'Follow-up fetched successfully',
    data,
  });
}
