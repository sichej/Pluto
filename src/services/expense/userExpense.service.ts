import UserExpense from '../../models/expense/userExpense.model';

class UserExpenseService {
    static async createUserExpense(userEmail: string, idExpense: number): Promise<UserExpense> {
        try {
            const newUserExpense = await UserExpense.create({ userEmail, idExpense });
            return newUserExpense;
        } catch (error) {
            throw new Error(`Failed to create user-expense: ${error.message}`);
        }
    }
}

export default UserExpenseService;

