import { Request, Response, NextFunction } from "express";
import { ERROR } from "../../repository/errors";
import { HTTP_Codes } from "../../repository/httpCodes";

export async function categoryMiddleware(req: Request, res: Response, next: NextFunction): Promise<any> {
    if (!req.body.id || typeof req.body.id !== 'number' || req.body.id === '') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    
    next();
}

export async function categoryDetailsMiddleware(req: Request, res: Response, next: NextFunction): Promise<any> {
    if (!req.body.idCategory || typeof req.body.idCategory !== 'number' || req.body.idCategory === '') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    
    next();
}