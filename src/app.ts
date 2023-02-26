import express, { Application } from 'express';

import appRouter from './routes';

class App {
  public server: Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(appRouter);
  }
}

export default new App().server;