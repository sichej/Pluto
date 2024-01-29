import { Request, Response } from 'express';
import { HTTP_Codes } from '../../repository/httpCodes';
import sha512 from "crypto-js/sha512";
import { signJWT } from '../../services/auth/auth.services';
import UserService from '../../services/user/user.services';

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const email: string = req.body.email;
        const password: string = sha512(req.body.password).toString();
        const user = await UserService.getUserByEmail(email);
        if (!user) {
            res.status(HTTP_Codes.NOT_FOUND).json({ message: 'User not found' });
            return;
        }
        if (user.password !== password) {
            res.status(HTTP_Codes.UNAUTHORIZED).json({ message: 'Wrong password' });
            return;
        }
        const token = signJWT(user.email, 172800)
        res.header('Authorization', `Bearer ${token}`);
        res.status(HTTP_Codes.OK).send();
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
      const email: string = req.body.email;
      const name: string = req.body.name;
      const password: string = sha512(req.body.password).toString();
      const user = await UserService.getUserByEmail(email);
      if (user) {
          res.status(HTTP_Codes.FOUND).json({ message: 'User already registered' });
          return;
      }
      const newUser = await UserService.createUser(email, name, password);
      const token = signJWT(newUser.email, 172800)
      res.header('Authorization', `Bearer ${token}`);
      res.status(HTTP_Codes.OK).send();
  } catch (error) {
      res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  res.removeHeader('Authorization');
  res.status(HTTP_Codes.OK).send()
};