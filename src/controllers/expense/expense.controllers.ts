import { Request, Response } from 'express';
import { HTTP_Codes } from '../../repository/httpCodes';
import { addExpenseDetails, addExpenseToUser, createExpense } from '../../services/expense/expense.services';

export const newExpenseController = async (req: Request, res: Response): Promise<void> => {
    try {
        const value: number = req.body.value;
        const date: string = req.body.date;
        const name: string | null = req.body.name || null;
        const details: string | null = req.body.details || null;
        const idCategory: number = req.body.idCategory;
        const idCategoryDetail: number | null = req.body.idCategoryDetail || null;

        const idExpense = await createExpense(value, date);
        if (!idExpense) {
            res.status(HTTP_Codes.BAD_REQUEST).send('Error during the creation of the expense');
            return;
        }
        const idExpenseDetail = await addExpenseDetails(idExpense, name, details, idCategory, idCategoryDetail);
        if (!idExpenseDetail) {
            res.status(HTTP_Codes.BAD_REQUEST).send('Error adding details');
            return;
        }
        const result = await addExpenseToUser(idExpense, (req as any).user.data);
        if (!result) {
            res.status(HTTP_Codes.BAD_REQUEST).send('Something went wrong');
            return;
        }
        res.status(HTTP_Codes.OK).send('Expense added succesfully');

    } catch (error) {
        res.status(HTTP_Codes.BAD_REQUEST).send('Bad request');
    }
};