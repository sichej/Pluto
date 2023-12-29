import { Request, Response } from 'express';
import { HTTP_Codes } from '../../repository/httpCodes';
import { timeCategoryReport, timeReport } from '../../services/report/report.services';

export const generateTimeReportController = async (req: Request, res: Response): Promise<void> => {
    try {
        const from: string = req.body.from;
        const to: string = req.body.to;
        const total = await timeReport(from, to, (req as any).user.data);
    if (!total) {
        res.status(HTTP_Codes.BAD_REQUEST).send({ message: 'Error during report generation' });
        return;
    }
        res.status(HTTP_Codes.OK).send(total);
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};

export const generateTimeCategoryReportController = async (req: Request, res: Response): Promise<void> => {
    try {
        const from: string = req.body.from;
        const to: string = req.body.to;
        const idCategory: number = req.body.idCategory;
        const total = await timeCategoryReport(from, to, idCategory, (req as any).user.data);
    if (!total) {
        res.status(HTTP_Codes.BAD_REQUEST).send({ message: 'Error during report generation' });
        return;
    }
        res.status(HTTP_Codes.OK).send(total);
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};