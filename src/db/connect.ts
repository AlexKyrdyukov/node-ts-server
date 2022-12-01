import { DataSource } from 'typeorm';
import 'reflect-metadata';

import User from './entitiUser/User';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'userdb',
  entities: [User],
  synchronize: true,
  logging: false,
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
