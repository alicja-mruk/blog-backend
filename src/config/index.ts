import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export const config = {
  port: process.env.PORT || 5000,
  dbUrl: process.env.MONGODB_URI,
  api: {
    prefix: '/api',
  },
};