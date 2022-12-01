import type { Handler } from 'express';
import reposytorys from '../../db/index';

const signupUser: Handler = (req, res) => {
  try {
    // eslint-disable-next-line no-console
    console.log(reposytorys.userRepository);
    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;
    const dob = req.body.dob;
    const dbEmail = reposytorys.userRepository.find({email: email})
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
};

export default signupUser;
