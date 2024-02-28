import { Request, Response } from 'express';
import { HTTP_Codes } from '../../repository/httpCodes';
import IncomeService from '../../services/income/income.service';

export const createIncome = async (req: Request, res: Response): Promise<void> => {
    try {
        const value: number = req.body.value;
        const date: string = req.body.date;
        const name: string = req.body.name;
        const idCategory: number = req.body.idCategory;

        const income = await IncomeService.createIncome(value, date, name, idCategory, (req as any).user.data);
        if (!income.id) {
            res.status(HTTP_Codes.CONFLICT).json({ message: 'Error while adding income' });
            return;
        }
        res.status(HTTP_Codes.OK).send('Income added succesfully');
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};

export const getAllIncomes = async (req: Request, res: Response): Promise<void> => {
    try {
        const userIncomes = await IncomeService.getAllIncomesByUser((req as any).user.data);
        if (!userIncomes.length) {
            res.status(HTTP_Codes.OK).send([]);
            return;
        }
        res.status(HTTP_Codes.OK).send(userIncomes);
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};