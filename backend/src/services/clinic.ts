import ClinicModel from '@/model/clinic';

import {
  FollowUpStatus,
  IFollowUp,
  IPatient,
} from '@/interface/clinic';
import { addDaysToDate } from '@/util/date';
import { generateToken } from '@/util/clinic';
import { sendEmail } from '@/services/email';
import { generateFollowUpMessage } from '@/util/email';

export async function createPatient(
  name: string,
  typeOfCheckup: string
) {
  const newPatient: IPatient = {
    name,
    typeOfCheckup,
  };

  const [patient] = await ClinicModel.createPatient(newPatient);

  await createFollowUps(patient.id);

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

  const { subject, body } = generateFollowUpMessage(
    'Kaushal',
    'Vaccination'
  );

  sendEmail('karelle.turcotte73@ethereal.email', subject, body);

  return ClinicModel.insertFollowUps(followUps);
}
