import { Request, Response, NextFunction } from "express";
import { ERROR } from "../../repository/errors";
import { HTTP_Codes } from "../../repository/httpCodes";

export async function timeReportMiddleware(req: Request, res: Response, next: NextFunction): Promise<any> {
    if (!req.body.fromDate || typeof req.body.fromDate !== 'string' || req.body.fromDate.length !== 10) {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    if (!req.body.toDate || typeof req.body.toDate !== 'string' || req.body.toDate.length !== 10) {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    if (req.body.fromDate > req.body.toDate) {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    if (!req.body.type || typeof req.body.type !== 'number') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    
    next();
}