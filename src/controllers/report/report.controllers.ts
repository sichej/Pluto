import { Request, Response } from 'express';
import { HTTP_Codes } from '../../repository/httpCodes';
import ReportService from '../../services/report/report.services';

export const createReport = async (req: Request, res: Response): Promise<void> => {
    try {
        const fromDate: string = req.body.fromDate;
        const toDate: string = req.body.toDate;
        const type: number | null = req.body.type;
        const idCategory: number | null = req.body.idCategory || null;

        const amount = await ReportService.getGeneralAmountForReport((req as any).user.data, fromDate, toDate);
        const report = await ReportService.createReport(fromDate, toDate, type, idCategory, amount);
        if (!report.id) {
            res.status(HTTP_Codes.CONFLICT).json({ message: 'Error while creating report' });
            return;
        }

        res.status(HTTP_Codes.OK).send('Report created succesfully');
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};