import express from 'express';
import { login, register } from '../../controllers/auth/auth.constrollers';
import { loginMiddleware } from '../../controllers/middlewares/auth.middleware';

const authRouter = express.Router();

authRouter.post('/login', loginMiddleware, login);
authRouter.post('/register', register);

export default authRouter;