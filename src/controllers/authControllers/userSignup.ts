import type { Handler } from 'express';
import { validationResult } from 'express-validator';
import CryptoJS from 'crypto-js';
import repositorys from '../../db/index';
import entities from '../../db/serverEntities';
import config from '../../config';

const signupUser: Handler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'errors registation', errors });
    }
    const dbUser = await repositorys.userRepository.find({ select: {
      email: req.body.email,
    } });
    // eslint-disable-next-line no-console
    if (dbUser.length) {
      return res.status(400).json({ message: 'user with this email already exists' });
    }
    const user = new entities.User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    // user.password = CryptoJS.SHA256(config.salt + req.body.password).toString(CryptoJS.enc.Hex);
    user.password = CryptoJS.SHA512(req.body.password + config.saltPassword).toString();
    // eslint-disable-next-line no-console
    console.log(user.password);
    user.dob = req.body.dob;
    const retUser = await repositorys.userRepository.save(user);
    res.status(200).json({ message: 'user successfully registered', retUser });
  } catch (error) {
    res.status(404).json({ message: error });
    console.error(error);
  }
};

export default signupUser;
