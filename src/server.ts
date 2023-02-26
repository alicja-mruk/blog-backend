import express, { Application } from 'express';
import 'reflect-metadata';
import { config } from 'src/config';
import { loaders } from 'src/loaders';
import { loggerDev } from 'src/utils/logger';

const startServer = async () => {
  const app: Application = express();
  await loaders(app);
  app
    .listen(config.port, () => {
      loggerDev.info(`Server listening on port: ${config.port}`);
    })
    .on('error', err => {
      loggerDev.error(err);
      process.exit(1);
    });
};

startServer();
