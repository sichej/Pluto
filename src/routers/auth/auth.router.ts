import express from 'express';
import { login, logout, register } from '../../controllers/auth/auth.controllers';
import { loginMiddleware, registerMiddleware } from '../../controllers/middlewares/auth.middleware';

const authRouter = express.Router();

authRouter.post('/login', loginMiddleware, login);
authRouter.post('/register', registerMiddleware, register);
authRouter.get('/logout', logout);

export default authRouter;