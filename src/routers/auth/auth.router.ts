import express from 'express';
import { login } from '../../controllers/auth/auth.constrollers';

const authRouter = express.Router();

authRouter.post('/login', login);

export default authRouter;