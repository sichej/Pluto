import CategoryDetail from "../../models/category/categoryDetail.model";

class CategoryDetailService {

    static async getCategoryDetailsByIdCategory(idCategory: number): Promise<CategoryDetail[] | null> {
        try {
            const categoryDetails = await CategoryDetail.findAll({ where: {idCategory} });
            if (!categoryDetails.length) {
                return null;
            }
            return categoryDetails;
        } catch (error) {
            throw new Error(`Failed to retrieve category details: ${error.message}`);
        }
    }
}

export default CategoryDetailService;