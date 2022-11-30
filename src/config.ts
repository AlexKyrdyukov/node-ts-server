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
  mongoUrl: mainConfig.MONGO_URL,
};

module.exports = config;