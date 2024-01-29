// import { queryDatabase } from "../../config/database/database.config";
// import { ADD_EXPENSE_TO_USER, NEW_EXPENSE, NEW_EXPENSE_DETAILS } from "../../repository/queries";


// export const addExpenseDetails = async (idExpense: number, name: string | null, details: string | null, idCategory: number | null, idCategoryDetail: number | null) => {
//     try {
//         const idExpenseDetail: any = await queryDatabase(NEW_EXPENSE_DETAILS, [idExpense, name, details, idCategory, idCategoryDetail]);
//         if (idExpenseDetail.insertId) {
//             return idExpenseDetail.insertId as number;
//         }
//         return null;
//     } catch (err) {
//         return false;
//     }
// }

// export const addExpenseToUser = async (idExpense: number, email: string) => {
//     try {
//         const result = await queryDatabase(ADD_EXPENSE_TO_USER, [idExpense, email]);
//         if (result) {
//             return true;
//         }
//         return null;
//     } catch (err) {
//         return false;
//     }
// }

import Expense from '../../models/expense/expense.model';

class ExpenseService {
    static async createExpense(value: number, date: string): Promise<Expense> {
        try {
            const newExpense = await Expense.create({ value, date });
            return newExpense;
        } catch (error) {
            throw new Error(`Failed to create expense: ${error.message}`);
        }
    }

    static async getAllExpenses(): Promise<Expense[]> {
        try {
            const expenses = await Expense.findAll();
            return expenses;
        } catch (error) {
            throw new Error(`Failed to retrieve expenses: ${error.message}`);
        }
    }

    static async getExpenseById(id: number): Promise<Expense | null> {
        try {
            const expense = await Expense.findByPk(id);
            return expense;
        } catch (error) {
            throw new Error(`Failed to retrieve expense: ${error.message}`);
        }
    }

    static async deleteExpenseById(id: number): Promise<number> {
        try {
            const rowsDeleted = await Expense.destroy({ where: { id } });
            return rowsDeleted;
        } catch (error) {
            throw new Error(`Failed to delete expense: ${error.message}`);
        }
    }
}

export default ExpenseService;

