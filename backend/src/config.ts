import { config } from 'dotenv';

const pathToEnv = __dirname + '/../.env';

config({ path: pathToEnv });

const serverConfig = {
  serverPort: process.env.SERVER_PORT || 3000,
  host: process.env.SERVER_HOST || '127.0.0.1',
  redis: {
    port: Number(process.env.REDIS_PORT) || 6379,
  },
  database: {
    charset: 'utf8',
    client: process.env.DB_CLIENT,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    timezone: 'UTC',
    user: process.env.DB_USER,
  },

  email: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
  },
};

export default serverConfig;
