import express from 'express';
import { newExpenseController } from '../../controllers/expense/expense.controllers';
import { newExpenseMiddleware } from '../../controllers/middlewares/expense.middleware';

const expenseRouter = express.Router();

expenseRouter.post('/newexpense', newExpenseMiddleware, newExpenseController);

export default expenseRouter;