import { Request, Response } from 'express';
import { HTTP_Codes } from '../../repository/httpCodes';
import sha512 from "crypto-js/sha512";
import { signJWT } from '../../services/auth/auth.services';
import { createUser, findUserByEmail, getUserByEmail, getUserWithEmailAndPassword } from '../../services/user/user.services';

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
      const email: string = req.body.email;
      const password: string = sha512(req.body.password).toString();
      const user = await getUserWithEmailAndPassword(email, password);
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

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const email: string = req.body.email;
    const name: string = req.body.name;
    const password: string = sha512(req.body.password).toString();
    const user = await findUserByEmail(email);
    if (user) {
      res.status(HTTP_Codes.FOUND).json({ message: 'Email already registered' });
      return;
    }
    const result = createUser(email, name, password);
    if (!result) {
      res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).json({ message: 'Internal error' });
      return;
    }
    const newUser = await findUserByEmail(email);
    if (!newUser) {
      res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).json({ message: 'Internal error' });
      return;
    }
    const userCreated = await getUserByEmail(email);

    const token = signJWT(userCreated.email, 172800)
    res.header('Authorization', `Bearer ${token}`);
    res.status(HTTP_Codes.OK).send();
  } catch (error) {
    res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};