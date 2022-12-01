import AppDataSource from './connect';
import User from './models/User';

const reposytorys = {
  userRepository: AppDataSource.getRepository(User),
};

export default reposytorys;
