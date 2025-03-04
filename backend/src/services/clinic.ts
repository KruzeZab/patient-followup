import ClinicModel from '@/model/clinic';

import {
  FollowUpFilter,
  FollowUpStatus,
  IFollowUp,
  IPatient,
} from '@/interface/clinic';

import { addDaysToDate } from '@/util/date';
import { generateToken } from '@/util/clinic';
import loggerWithNameSpace from '@/util/logger';

import BadRequestError from '@/error/badRequestError';

import { scheduleFollowUpEmails } from '@/jobs/scheduler';

const logger = loggerWithNameSpace('Clinic');

/**
 * Add a new patient
 *
 */
export async function createPatient(
  name: string,
  email: string,
  typeOfCheckup: string
) {
  const newPatient: IPatient = {
    name,
    email,
    typeOfCheckup,
  };

  const [patient] = await ClinicModel.createPatient(newPatient);

  logger.info(`Patient created with id: ${patient.id}`);

  await createFollowUps(patient.id);

  logger.info(
    `Follow ups created for patient with id: ${patient.id} `
  );

  return patient.id;
}

/**
 * Add a new follow-up
 *
 */
export async function createFollowUps(patientId: number) {
  const now = new Date();

  const followUpTimes = [
    addDaysToDate(now, 1), // 1 day
    addDaysToDate(now, 3), // 3 days
    addDaysToDate(now, 7), // 7 days
  ];

  const followUps: IFollowUp[] = followUpTimes.map((time) => ({
    patientId,
    followUpTime: time,
    status: FollowUpStatus.PENDING,
    token: generateToken(),
  }));

  const followUpIds = await ClinicModel.insertFollowUps(followUps);

  const patient = await findPatientById(patientId);

  await scheduleFollowUpEmails(followUpIds, followUpTimes, patient);

  return followUpIds;
}

/**
 * Find patient by given patient id
 *
 */
export async function findPatientById(patientId: number) {
  logger.info(`Finding patient with id: ${patientId}`);

  return ClinicModel.findPatientById(patientId);
}

/**
 * Fetch all follow ups
 *
 */
export async function fetchFollowUps(filters: FollowUpFilter) {
  logger.info(`Fetching followups with filters: ${filters}`);

  return ClinicModel.fetchFollowUps(filters);
}

/**
 * Update follow up status
 *
 */
export async function updateFollowUpStatus(
  followUpId: number,
  status: FollowUpStatus
) {
  logger.info(
    `Updating follow-up ID ${followUpId} to status: ${status}`
  );

  const [updatedFollowUp] = await ClinicModel.updateFollowUpStatus(
    followUpId,
    status
  );

  if (!updatedFollowUp) {
    throw new BadRequestError(
      `Follow-up with ID ${followUpId} not found`
    );
  }

  return updatedFollowUp.id;
}
