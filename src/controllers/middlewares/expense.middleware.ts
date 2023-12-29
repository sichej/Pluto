import { Request, Response, NextFunction } from "express";
import { ERROR } from "../../repository/errors";
import { HTTP_Codes } from "../../repository/httpCodes";

export async function newExpenseMiddleware(req: Request, res: Response, next: NextFunction): Promise<any> {
    if (!req.body.value || typeof req.body.value !== 'number' || req.body.value < 0) {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    if (!req.body.date || typeof req.body.date !== 'string' || req.body.date.length !== 10) {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    if (req.body.name && typeof req.body.name !== 'string') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    if (req.body.details && typeof req.body.details !== 'string') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    if (!req.body.idCategory || typeof req.body.idCategory !== 'number') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    if (req.body.idCategoryDetail && typeof req.body.idCategoryDetail !== 'number') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    
    next();
}