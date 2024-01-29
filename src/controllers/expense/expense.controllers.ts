import { Request, Response } from 'express';
import { HTTP_Codes } from '../../repository/httpCodes';
import ExpenseService from '../../services/expense/expense.services';
import ExpenseDetailService from '../../services/expense/expenseDetail.service';
import UserExpenseService from '../../services/expense/userExpense.service';

export const createExpense = async (req: Request, res: Response): Promise<void> => {
    try {
        const value: number = req.body.value;
        const date: string = req.body.date;
        const name: string | null = req.body.name || null;
        const details: string | null = req.body.details || null;
        const idCategory: number = req.body.idCategory;
        const idCategoryDetail: number | null = req.body.idCategoryDetail || null;

        const expense = await ExpenseService.createExpense(value, date);
        if (!expense.id) {
            res.status(HTTP_Codes.CONFLICT).json({ message: 'Error while creating expense' });
            return;
        }
        const expeseDetail = await ExpenseDetailService.createExpenseDetail(expense.id, name, details, idCategory, idCategoryDetail);
        if (!expeseDetail.id) {
            res.status(HTTP_Codes.CONFLICT).json({ message: 'Error while creating expense' });
            return;
        }
        const userExpense = await UserExpenseService.createUserExpense((req as any).user.data, expense.id);
        if (!userExpense.userEmail) {
            res.status(HTTP_Codes.CONFLICT).json({ message: 'Error while creating expense' });
            return;
        }
        res.status(HTTP_Codes.OK).send('Expense added succesfully');
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};