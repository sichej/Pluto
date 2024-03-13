import { Op } from "sequelize";
import ExpenseDetail from "../../models/expense/expenseDetail.model";
import Expense from "../../models/expense/expense.model";
import UserExpense from "../../models/expense/userExpense.model";

class ExpenseDetailService {

    static async createExpenseDetail(idExpense: number, name: string | null, details: string | null, idCategory: number, idCategoryDetail: number | null): Promise<ExpenseDetail> {
        try {
            const newExpenseDetail = await ExpenseDetail.create({ idExpense, name, details, idCategory, idCategoryDetail });
            return newExpenseDetail;
        } catch (error) {
            throw new Error(`Failed to create expense detail: ${error.message}`);
        }
    }

    static async getExpenseDetailsByIdExpense(idExpense: number): Promise<ExpenseDetail[] | null> {
        try {
            const expenseDetails = await ExpenseDetail.findAll({ where: {idExpense} });
            if (!expenseDetails.length) {
                return null;
            }
            return expenseDetails;
        } catch (error) {
            throw new Error(`Failed to retrieve expense details: ${error.message}`);
        }
    }

    static async getUserExpenseDetails(userExpenses: UserExpense[]): Promise<ExpenseDetail[] | null> {
        try {
            const idExpenses = userExpenses.map(userExpense => userExpense.idExpense);
            const expenseDetails = await ExpenseDetail.findAll({ where: {
                idExpense: { [Op.in]: idExpenses }
            } });
            if (!expenseDetails.length) {
                return null;
            }
            return expenseDetails;
        } catch (error) {
            throw new Error(`Failed to retrieve expense details: ${error.message}`);
        }
    }
}

export default ExpenseDetailService;