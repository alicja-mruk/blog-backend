import { Db } from 'mongodb';
import mongoose from 'mongoose';
import { config } from 'src/config';
import { loggerDev } from 'src/utils/logger';

mongoose.set('strictQuery', false);

export const mongooseLoader = async (): Promise<Db> => {
  const db = config.dbUrl;
  try {
    const mongoConnection = await mongoose.connect(db, {
      autoIndex: true,
    });
    loggerDev.info('MongoDB has been connected');
    return mongoConnection.connection.db;
  } catch (err) {
    loggerDev.error('MongoDB connection error', err.message);
    process.exit(1);
  }
};
