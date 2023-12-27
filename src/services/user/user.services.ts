import { queryDatabase } from "../../config/database/database.config";
import { GET_USER_BY_EMAIL } from "../../repository/queries";

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