import express from 'express';
import userRouter from './routers/user/user.router';
import authRouter from './routers/auth/auth.router';
import categoryRouter from './routers/category/category.router';
import { authMiddleware } from './controllers/middlewares/auth.middleware';
import expenseRouter from './routers/expense/expense.router';
import reportRouter from './routers/report/report.router';
import statusRouter from './routers/status/status.router';


const app = express();
const port = process.env.PORT || 9091;
app.use(express.json());

const server = app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});

app.use('/api/status', statusRouter)
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/category', authMiddleware, categoryRouter);
app.use('/api/expense', authMiddleware, expenseRouter);
app.use('/api/report', authMiddleware, reportRouter);


const closeServer = () => {
  server.close();
};

export { app, closeServer };
