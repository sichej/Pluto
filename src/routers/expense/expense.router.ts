import express from 'express';
import { newExpenseController } from '../../controllers/expense/expense.controllers';

const expenseRouter = express.Router();

expenseRouter.post('/newexpense', newExpenseController);

export default expenseRouter;