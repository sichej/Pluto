import CategoryIncome from "../../models/category/categoryIncome.model";

class CategoryIncomeService {

    static async getAllCategoriesIncome(): Promise<CategoryIncome[]> {
        try {
            const categories = await CategoryIncome.findAll();
            return categories;
        } catch (error) {
            throw new Error(`Failed to retrieve categories: ${error.message}`);
        }
    }

    static async getCategoryIncomeById(id: number): Promise<CategoryIncome | null> {
        try {
            const category = await CategoryIncome.findByPk(id);
            return category;
        } catch (error) {
            throw new Error(`Failed to retrieve category: ${error.message}`);
        }
    }
}

export default CategoryIncomeService;

