import { queryDatabase } from "../../config/database/database.config";
import { ADD_EXPENSE_TO_USER, NEW_EXPENSE, NEW_EXPENSE_DETAILS } from "../../repository/queries";

export const createExpense = async (value: number, date: string) => {
    try {
        const idExpense: any = await queryDatabase(NEW_EXPENSE, [value, date]);
        if (idExpense.insertId) {
            return idExpense.insertId as number;
        }
        return false;
    } catch (err) {
        console.log('error')
        return false;
    }
}

export const addExpenseDetails = async (idExpense: number, name: string | null, details: string, idCategory: number | null, idCategoryDetail: number | null) => {
    try {
        const idExpenseDetail: any = await queryDatabase(NEW_EXPENSE_DETAILS, [idExpense, name, details, idCategory, idCategoryDetail]);
        if (idExpenseDetail.insertId) {
            return idExpenseDetail.insertId as number;
        }
        return null;
    } catch (err) {
        return false;
    }
}

export const addExpenseToUser = async (idExpense: number, email: string) => {
    try {
        const result = await queryDatabase(ADD_EXPENSE_TO_USER, [idExpense, email]);
        if (result) {
            return true;
        }
        return null;
    } catch (err) {
        return false;
    }
}