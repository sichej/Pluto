import { queryDatabase } from "../../config/database/database.config";
import { CHECK_LOGIN, GET_USER_BY_EMAIL } from "../../repository/queries";
import jwt from 'jsonwebtoken';

export const findUserWithEmailAndPassword = async (email:string, password: string) => {
    try {
        const user = await queryDatabase(CHECK_LOGIN, [email.toLowerCase(), password]);
        if (user.length === 1) {
            return user[0];
        }
    } catch (err) {
        return false;
    }
}

export const signJWT = (email: string, time: number) => {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (time),
        data: email
      }, process.env.JWT_SECRET);

    return token;
}
