import express, { Application } from 'express';
import { config } from 'src/config';
import { middleware } from 'src/middleware';
import appRouter from 'src/routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from 'swagger.json';

export const expressLoader = async (app: Application): Promise<void> => {
  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  /* Middleware*/
  app.use(express.json());

  /*  Proxy rules */
  app.set('trust proxy', true);

  /*  Routes  */
  app.use(config.api.prefix, appRouter);

  /*  Swagger  */
  app.use(`${config.api.prefix}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  /*  404 middleware  */
  app.use(middleware.notFound);

  /*  Error middleware  */
  app.use(middleware.errorRequest);
};
