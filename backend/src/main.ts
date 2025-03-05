import express from 'express';
import { logger } from './middleware/logger';

import routes from './routes';
import config from './config';

import {
  genericErrorHandler,
  notFoundError,
} from './middleware/errorHandler';

const app = express();

app.use(express.json());

app.use(logger);

app.use(routes);

app.use(genericErrorHandler);

app.use(notFoundError);

console.log(`Server listening on port: ${config.serverPort}`);

app.listen(config.serverPort);
