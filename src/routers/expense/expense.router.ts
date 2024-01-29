import express from 'express';
import { newExpenseMiddleware } from '../../controllers/middlewares/expense.middleware';
import { createExpense } from '../../controllers/expense/expense.controllers';

const expenseRouter = express.Router();

expenseRouter.post('/newexpense', newExpenseMiddleware, createExpense);

export default expenseRouter;