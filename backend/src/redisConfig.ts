import { RedisOptions } from 'ioredis';

import config from './config';

export const redisConfig: RedisOptions = {
  host: config.host,
  port: config.redis.port,
};
