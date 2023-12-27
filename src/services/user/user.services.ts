import { queryDatabase } from "../../config/database/database.config";
import { CHECK_LOGIN, GET_USER_BY_EMAIL, REGISTER_USER } from "../../repository/queries";

export const findUserByEmail = async (email:string) => {
    try {
        const user = await queryDatabase(GET_USER_BY_EMAIL, [email.toLowerCase()]);
        if (user.length === 1) {
            return true;
        }
    } catch (err) {
        return false;
    }
}

export const getUserByEmail = async (email:string) => {
    try {
        const user = await queryDatabase(GET_USER_BY_EMAIL, [email.toLowerCase()]);
        if (user.length === 1) {
            return user[0];
        }
    } catch (err) {
        return false;
    }
}

export const getUserWithEmailAndPassword = async (email:string, password: string) => {
    try {
        const user = await queryDatabase(CHECK_LOGIN, [email.toLowerCase(), password]);
        if (user.length === 1) {
            return user[0];
        }
    } catch (err) {
        return false;
    }
}

export const createUser = async (email:string, name: string, password: string) => {
    try {
        await queryDatabase(REGISTER_USER, [email.toLowerCase(), name, password]);
        return true;
    } catch (err) {
        return false;
    }
}