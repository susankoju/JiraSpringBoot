import dotenv from 'dotenv';

dotenv.config();
export const connectionString = process.env.CONNECTION_STRING;
export const domain = process.env.AUTH0_DOMAIN;
export const audience = process.env.AUTH0_AUDIENCE;
