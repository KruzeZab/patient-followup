import { Worker } from 'bullmq';

import { redisConfig } from '../redisConfig';

import { sendEmail } from '../services/email';

import loggerWithNameSpace from '../util/logger';

const logger = loggerWithNameSpace('Worker');

const followUpWorker = new Worker(
  'follow-up-emails',
  async (job) => {
    const { followUpId, email, subject, body } = job.data;

    try {
      await sendEmail(email, subject, body);

      logger.info(
        `Follow-up email sent for follow-up ID: ${followUpId}`
      );
    } catch (error) {
      logger.error(
        `Failed to send follow-up email for ID: ${followUpId}`,
        error
      );
    }

    logger.info(
      `Follow-up email sent for follow-up ID: ${followUpId}`
    );
  },
  { connection: redisConfig }
);

logger.info('Follow-up worker started...');
