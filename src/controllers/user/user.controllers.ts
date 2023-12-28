import { Request, Response } from 'express';
import { findUserByEmail } from '../../services/user/user.services';
import { HTTP_Codes } from '../../repository/httpCodes';

export const getUserByEmailController = async (req: Request, res: Response): Promise<void> => {
    try {
        const email: string = req.body.email;
        const user = await findUserByEmail(email);
    if (!user) {
        res.status(HTTP_Codes.NOT_FOUND).send({ message: 'User not found' });
        return;
    }
        res.status(HTTP_Codes.OK).send(user);
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};