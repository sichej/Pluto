import { queryDatabase } from "../../config/database/database.config";
import { TIME_REPORT } from "../../repository/queries";

export const timeReport = async (from: string, to: string, email: string) => {
    try {
        if (from >= to) {
            return false;
        }
        const totalExpense: any = await queryDatabase(TIME_REPORT, [email, from, to]);
        if (!totalExpense) {
            return false;
        }
        return totalExpense;
    } catch (err) {
        return false;
    }
}