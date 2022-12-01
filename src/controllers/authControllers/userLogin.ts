import type { Handler } from 'express';
import reposytorys from '../../db/index';

const loginUser: Handler = (req, res) => {
  try {
    // eslint-disable-next-line no-console
    console.log(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

export default loginUser;
