import { Application } from 'express';
import AuthorModel from 'src/models/author';
import PostModel from 'src/models/post';
import { IModelDI } from 'src/types/diInjectors';
import { loggerDev } from 'src/utils/logger';

import diInjector from './diInjector';
import { expressLoader } from './express';
import { mongooseLoader } from './mongoose';

export const loaders = async (app: Application): Promise<void> => {
  loggerDev.info('Loaders running');
  await mongooseLoader();
  const postModel: IModelDI = {
    name: 'postModel',
    model: PostModel,
  };

  const authorModel: IModelDI = {
    name: 'authorModel',
    model: AuthorModel,
  };

  await diInjector({
    models: [postModel, authorModel],
  });

  loggerDev.info('Dependency Injector loaded');
  loggerDev.info('Jobs loaded');

  await expressLoader(app);
};
