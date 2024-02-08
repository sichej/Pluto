import express from 'express';
import { newExpenseMiddleware } from '../../controllers/middlewares/expense.middleware';
import { createExpense, getAllExpenses } from '../../controllers/expense/expense.controllers';

const expenseRouter = express.Router();

expenseRouter.post('/newexpense', newExpenseMiddleware, createExpense);
expenseRouter.post('/getexpenses', getAllExpenses);

export default expenseRouter;