import type { Handler } from 'express';
import repositorys from '../../db/index';
import entities from '../../db/serverEntities';
import { AES } from 'crypto-ts';

const signupUser: Handler = async (req, res) => {
  try {
    const dbEmail = await repositorys.userRepository.findOneBy({ email: req.body.email });
    // eslint-disable-next-line no-console
    console.log(dbEmail);
    // eslint-disable-next-line no-console
    console.log(AES.encrypt(req.body.password));
    if (dbEmail) {
      return res.sendStatus(400);
    }
    const user = new entities.User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.dob = req.body.dob;
    await repositorys.userRepository.save(user);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(404);
    console.error(error);
  }
};

export default signupUser;
