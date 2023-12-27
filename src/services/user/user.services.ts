import { queryDatabase } from "../../config/database/database.config";
import { GET_USER_BY_EMAIL } from "../../repository/queries";

export const getUserByEmail = async (email:string) => {
    try {
        const user = await queryDatabase(GET_USER_BY_EMAIL, [email]);
        if (user.length === 1) {
            return user[0];
        }
    } catch (err) {
        return 0;
    }
}