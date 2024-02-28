import Income from '../../models/income/income.model';

class IncomeService {
    static async createIncome(value: number, date: string, name: string, idCategory: number, email: string): Promise<Income> {
        try {
            const newIncome = await Income.create({ value, date, name, idCategory, email });
            return newIncome;
        } catch (error) {
            throw new Error(`Failed to create income: ${error.message}`);
        }
    }

    static async getAllIncomesByUser(email: string): Promise<Income[]> {
        try {
            const incomes = await Income.findAll({ where: { email } });
            return incomes;
        } catch (error) {
            throw new Error(`Failed to retrieve incomes: ${error.message}`);
        }
    }

    static async getIncomeById(id: number): Promise<Income | null> {
        try {
            const income = await Income.findByPk(id);
            return income;
        } catch (error) {
            throw new Error(`Failed to retrieve income: ${error.message}`);
        }
    }
}

export default IncomeService;

