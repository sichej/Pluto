import express from 'express';
import { login } from '../../controllers/auth/auth.constrollers';
import { loginMiddleware } from '../../controllers/middlewares/auth.middleware';

const authRouter = express.Router();

authRouter.post('/login', loginMiddleware, login);

export default authRouter;