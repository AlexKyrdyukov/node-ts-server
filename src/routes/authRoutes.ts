import express from 'express';
import authControllers from '../controllers/authControllers';

const routes = express.Router();

routes.post('/login', authControllers.loginUser);
routes.post('/signup', authControllers.signupUser);

export default routes;
