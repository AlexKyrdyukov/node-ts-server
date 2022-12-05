import type { Handler } from 'express';
import { validationResult } from 'express-validator';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
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
    user.password = CryptoJS.SHA512(req.body.password + config.saltPassword).toString();
    user.dob = req.body.dob;
    const retUser = await repositorys.userRepository.save(user);
    // eslint-disable-next-line no-console
    console.log(retUser.id);
    const token = jwt.sign({ foo: retUser.id }, config.privateKey, { algorithm: 'HS512' });
    res.status(200).json({ message: 'user successfully registered', token });
    // eslint-disable-next-line no-console
    console.log(res);
  } catch (error) {
    res.status(404).json({ message: error });
    console.error(error);
  }
};

export default signupUser;
