import { Request, Response, NextFunction } from "express";
import { ERROR } from "../../repository/errors";
import { HTTP_Codes } from "../../repository/httpCodes";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})+$/;

export async function loginMiddleware(req: Request, res: Response, next: NextFunction): Promise<any> {
    if (!req.body.email || typeof req.body.email !== 'string' || req.body.email === '') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }

    if (!emailRegex.test(req.body.email)) {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.INVALID_EMAIL)
    }

    if (!req.body.password || typeof req.body.password !== 'string' || req.body.password === '') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }

    next();
}

export async function registerMiddleware(req: Request, res: Response, next: NextFunction): Promise<any> {
    if (!req.body.email || typeof req.body.email !== 'string' || req.body.email === '') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }
    if (!req.body.name || typeof req.body.name !== 'string' || req.body.name === '') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }

    if (!emailRegex.test(req.body.email)) {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.INVALID_EMAIL)
    }

    if (!req.body.password || typeof req.body.password !== 'string' || req.body.password === '') {
        return res.status(HTTP_Codes.BAD_REQUEST).send(ERROR.BODY_ERROR)
    }

    next();
}