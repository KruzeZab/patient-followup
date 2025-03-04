import ClinicModel from '@/model/clinic';

import {
  FollowUpStatus,
  IFollowUp,
  IPatient,
} from '@/interface/clinic';

import { addDaysToDate } from '@/util/date';
import { generateToken } from '@/util/clinic';
import loggerWithNameSpace from '@/util/logger';

import { scheduleFollowUpEmails } from '@/jobs/scheduler';

const logger = loggerWithNameSpace('Clinic');

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
