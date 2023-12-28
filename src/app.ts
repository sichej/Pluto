import express from 'express';
import userRouter from './routers/user/user.router';
import authRouter from './routers/auth/auth.router';
import categoryRouter from './routers/category/category.router';
import { authMiddleware } from './controllers/middlewares/auth.middleware';


const app = express();
const port = process.env.PORT || 9091;
app.use(express.json());

const server = app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/category', authMiddleware, categoryRouter)


const closeServer = () => {
  server.close();
};

export { app, closeServer };
