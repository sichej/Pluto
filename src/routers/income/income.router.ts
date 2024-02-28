import express from 'express';
import { createIncome, getAllIncomes } from '../../controllers/income/income.controller';
import { newIncomeMiddleware } from '../../controllers/middlewares/income.middleware';

const incomeRouter = express.Router();

incomeRouter.post('/newincome', newIncomeMiddleware, createIncome);
incomeRouter.post('/getincomes', getAllIncomes);

export default incomeRouter;