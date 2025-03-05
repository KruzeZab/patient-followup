import { Queue } from 'bullmq';

import { redisConfig } from '../redisConfig';

import { FOLLOW_UP_EMAILS } from '../constants/jobs';

export const followUpQueue = new Queue(FOLLOW_UP_EMAILS, {
  connection: redisConfig,
});
