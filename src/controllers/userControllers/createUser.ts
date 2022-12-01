import type { Handler } from 'express';
import reposytorys from '../../db/index';

const createUser: Handler = (req, res) => {
  try {
    // eslint-disable-next-line no-console
    console.log(reposytorys.userRepository);
  } catch (error) {
    console.error(error);
  }
};

export default createUser;
