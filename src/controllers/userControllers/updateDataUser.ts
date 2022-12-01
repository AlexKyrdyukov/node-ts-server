import type { Request, Response } from 'express';
import reposytorys from '../../db/index';

const updateUserData = async (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line no-console
    console.log(reposytorys.userRepository);
  } catch (error) {
    console.error(error);
  }
};

export default updateUserData;
