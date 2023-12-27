import { Request, Response } from 'express';
import { HTTP_Codes } from '../../repository/httpCodes';
import sha512 from "crypto-js/sha512";
import { findUserWithEmailAndPassword, signJWT } from '../../services/auth/auth.services';

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
      const email: string = req.body.email;
      const password: string = sha512(req.body.password).toString();
      const user = await findUserWithEmailAndPassword(email, password);
      if (!user) {
        res.status(HTTP_Codes.NOT_FOUND).json({ message: 'User not found' });
        return;
      }
      const token = signJWT(user.email, 172800)
      res.header('Authorization', `Bearer ${token}`);
      res.status(HTTP_Codes.OK).send();
    } catch (error) {
      res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};