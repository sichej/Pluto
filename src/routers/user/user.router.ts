import express from 'express';
import { checkEmailMiddleware } from '../../controllers/middlewares/user.middleware';

const userRouter = express.Router();

export default userRouter;