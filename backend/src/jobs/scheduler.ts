import loggerWithNameSpace from '@/util/logger';
import { generateFollowUpMessage } from '@/util/email';

import { IPatient } from '@/interface/clinic';

import { SEND_FOLLOW_UP } from '@/constants/jobs';

import { followUpQueue } from '@/jobs/queue';

const logger = loggerWithNameSpace('Scheduler');

/**
 * Add email to scheduling
 *
 */
export async function scheduleFollowUpEmails(
  followUpIds: number[],
  followUpTimes: Date[],
  patient: IPatient,
  followUpTokens: string[]
) {
  logger.info(
    `Scheduling follow up email for patient: ${patient.name}`
  );

  return await Promise.all(
    followUpIds.map((id, index) => {
      const followUpTime = followUpTimes[index];
      const token = followUpTokens[index];
      const delay = followUpTime.getTime() - new Date().getTime();

      const { subject, body } = generateFollowUpMessage(
        patient.name,
        patient.typeOfCheckup,
        token
      );

      return followUpQueue.add(
        SEND_FOLLOW_UP,
        {
          followUpId: id,
          email: patient.email,
          subject,
          body,
        },
        { delay: Math.max(0, delay) }
      );
    })
  );
}
