import { Request, Response, NextFunction } from "express";
import { ERROR } from "../../repository/errors";
import { HTTP_Codes } from "../../repository/httpCodes";
import { verifyJWT } from "../../services/auth/auth.services";

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

export async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        res.status(HTTP_Codes.UNAUTHORIZED).json({ message: 'Unauthorized - No token provided' });
        return;
    }
    try {
        const decoded = verifyJWT(token);
        if (!decoded) {
            res.status(HTTP_Codes.UNAUTHORIZED).json({ message: 'Unauthorized - Invalid token' });
            return;
        }
        (req as any).user = decoded;
        next();
    } catch (error) {
        res.status(HTTP_Codes.BAD_REQUEST).json({ message: 'Bad request' });
        return;
    }
}