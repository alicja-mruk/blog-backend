import express, { Application } from 'express';
import { config } from 'src/config';
import { middleware } from 'src/middleware';
import appRouter from 'src/routes';

export const expressLoader = async (app: Application): Promise<void> => {
  /* Middleware*/
  app.use(express.json());

  /*  Routes  */
  app.use(config.api.prefix, appRouter);

  /*  404 middleware  */
  app.use(middleware.notFound);

  /*  Error middleware  */
  app.use(middleware.errorRequest);
};
