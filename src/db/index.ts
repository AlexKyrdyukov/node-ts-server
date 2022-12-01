import AppDataSource from './connect';
import User from './entitiUser/User';

const repositorys = {
  userRepository: AppDataSource.getRepository(User),
};

export default repositorys;
