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

