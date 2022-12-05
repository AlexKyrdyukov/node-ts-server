import * as fs from 'fs';
import dotenv from 'dotenv';

const configDefault = dotenv.parse(fs.readFileSync('default.env'));
const configLocal = dotenv.parse(fs.readFileSync('.env'));

const mainConfig = {
  ...configDefault,
  ...configLocal,
};

const config = {
  port: mainConfig.PORT,
  clientUrl: mainConfig.CLIENT_URL,
  saltPassword: mainConfig.SALT,
  privateKey: mainConfig.PRIVATE_KEY,
  postgresDb: {
    port: mainConfig.DB_PORT,
    host: mainConfig.HOST,
    user: mainConfig.DB_USERNAME,
    password: mainConfig.DB_PASSWORD,
    database: mainConfig.DB_NAME,
    logging: mainConfig.LOGGING,
  },
};

export default config;
