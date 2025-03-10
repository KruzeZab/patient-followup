import BadRequestError from '../error/badRequestError';

import {
  FollowUpFilter,
  FollowUpStatus,
  IFollowUp,
  IPatient,
} from '../interface/clinic';

import ClinicModel from '../model/clinic';

import { scheduleFollowUpEmails } from '../jobs/scheduler';

import { generateToken } from '../util/clinic';
import { addDaysToDate } from '../util/date';
import loggerWithNameSpace from '../util/logger';

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
  const existingPatient = await ClinicModel.findPatientByEmail(email);

  if (existingPatient) {
    throw new BadRequestError(
      'Patient with this email already exists'
    );
  }

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

  const followUpTokens = followUps.map((followUp) => followUp.token);

  const followUpIds = await ClinicModel.insertFollowUps(followUps);

  const patient = await findPatientById(patientId);

  await scheduleFollowUpEmails(
    followUpIds,
    followUpTimes,
    patient,
    followUpTokens
  );

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

/**
 * Find followup by given token
 *
 */
export async function fetchFollowUp(token: string) {
  logger.info(`Fetching follow up with token: ${token}`);

  return ClinicModel.fetchFollowUp(token);
}

/**
 * Find patient with given email
 *
 */
export async function findPatientByEmail(email: string) {
  logger.info(`Finding patient with email: ${email}`);

  return ClinicModel.findPatientByEmail(email);
}
