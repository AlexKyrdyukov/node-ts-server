import express from 'express';
import userControllers from '../controllers/userControllers';

const routes = express.Router();

routes.post('/', userControllers.createUser);
routes.get('/', userControllers.getUserData);
routes.patch('/:fullName', userControllers.updateUserData);
routes.delete('/:fullName', userControllers.deleteUser);

export default routes;
