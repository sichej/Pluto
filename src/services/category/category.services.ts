import { queryDatabase } from "../../config/database/database.config";
import { GET_CATEGORIES, GET_CATEGORY_BY_ID } from "../../repository/queries";

type Category = {
    id: number,
    name: string
}

export const getAllCategories = async (): Promise<Category[] | null> => {
    try {
        const categories: Category[] = await queryDatabase(GET_CATEGORIES, []);

        if (categories.length > 0) {
            return categories;
        } else {
            return null;
        }
    } catch (err) {
        throw new Error("Failed to fetch categories");
    }
}

export const getCategoryById = async (id: number): Promise<Category | null> => {
    try {
        const categories: Category[] = await queryDatabase(GET_CATEGORY_BY_ID, [id]);

        if (categories.length > 0) {
            return categories[0];
        } else {
            return null;
        }
    } catch (err) {
        throw new Error("Failed to fetch categories");
    }
}
