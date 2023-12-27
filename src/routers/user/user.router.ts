import express from 'express';
import { getUserByEmailController } from '../../controllers/user/user.controllers';
import { checkEmailMiddleware } from '../../controllers/middlewares/user.middleware';

const userRouter = express.Router();

userRouter.post('/getbyemail', checkEmailMiddleware, getUserByEmailController);

export default userRouter;