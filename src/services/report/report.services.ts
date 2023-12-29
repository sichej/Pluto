import { queryDatabase } from "../../config/database/database.config";
import { TIME_CATEGORY_REPORT, TIME_REPORT } from "../../repository/queries";

export const timeReport = async (from: string, to: string, email: string) => {
    try {
        if (from > to) {
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

export const timeCategoryReport = async (from: string, to: string, idCategory: number, email: string) => {
    try {
        if (from > to) {
            return false;
        }
        const totalExpense: any = await queryDatabase(TIME_CATEGORY_REPORT, [email, from, to, idCategory]);
        if (!totalExpense) {
            return false;
        }
        return totalExpense;
    } catch (err) {
        return false;
    }
}