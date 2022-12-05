import AppDataSource from './dataSource';
import User from './entities/User';

const repositorys = {
  userRepository: AppDataSource.getRepository(User),
};

export default repositorys;
