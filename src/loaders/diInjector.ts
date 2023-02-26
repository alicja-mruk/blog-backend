
import { IModelDI } from 'src/types/diInjectors';
import { loggerDev } from 'src/utils/logger';
import { Container } from 'typedi';

const dependencyInjector = async ({
  models,
}: {
  models: IModelDI[];
}): Promise<void> => {
  try {
    models.forEach(m => {
      Container.set(m.name, m.model);
    });
    Container.set('logger', loggerDev);

  } catch (error) {
    loggerDev.error(`Error on dependency injector loader: ${error}`);
    throw error;
  }
};

export { dependencyInjector };
export default dependencyInjector;
