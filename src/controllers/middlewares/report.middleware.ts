import { Request, Response, NextFunction } from "express";
import { ERROR } from "../../repository/errors";
import { HTTP_Codes } from "../../repository/httpCodes";

export async function timeReportMiddleware(req: Request, res: Response, next: NextFunction): Promise<any> {
    if (!req.body.from || typeof req.body.from !== 'string' || req.body.from.length !== 10) {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    if (!req.body.to || typeof req.body.to !== 'string' || req.body.to.length !== 10) {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    
    next();
}

export async function timeCategoryReportMiddleware(req: Request, res: Response, next: NextFunction): Promise<any> {
    if (!req.body.from || typeof req.body.from !== 'string' || req.body.from.length !== 10) {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    if (!req.body.to || typeof req.body.to !== 'string' || req.body.to.length !== 10) {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    if (!req.body.idCategory || typeof req.body.idCategory !== 'number') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    
    next();
}