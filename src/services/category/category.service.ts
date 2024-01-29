import Category from '../../models/category/category.model';

class CategoryService {
    static async createCategory(name: string): Promise<Category> {
        try {
            const newCategory = await Category.create({ name });
            return newCategory;
        } catch (error) {
            throw new Error(`Failed to create category: ${error.message}`);
        }
    }

    static async getAllCategories(): Promise<Category[]> {
        try {
            const categories = await Category.findAll();
            return categories;
        } catch (error) {
            throw new Error(`Failed to retrieve categories: ${error.message}`);
        }
    }

    static async getCategoryById(id: number): Promise<Category | null> {
        try {
            const category = await Category.findByPk(id);
            return category;
        } catch (error) {
            throw new Error(`Failed to retrieve category: ${error.message}`);
        }
    }

    static async updateCategoryById(id: number, newData: { name: string; }): Promise<[number, Category[]]> {
        try {
            const [rowsUpdated, updatedCategorys] = await Category.update(newData, {
                where: { id },
                returning: true,
            });
            return [rowsUpdated, updatedCategorys];
        } catch (error) {
            throw new Error(`Failed to update category: ${error.message}`);
        }
    }

    static async deleteCategoryById(id: number): Promise<number> {
        try {
            const rowsDeleted = await Category.destroy({ where: { id } });
            return rowsDeleted;
        } catch (error) {
            throw new Error(`Failed to delete category: ${error.message}`);
        }
    }
}

export default CategoryService;

