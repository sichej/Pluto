import { queryDatabase } from "../../config/database/database.config";
import { GET_CATEGORY_BY_ID, GET_CATEGORY_DETAILS_BY_ID_CATEGORY } from "../../repository/queries";

type CategoryDetail = {
    id: number,
    idCategory: string,
    details: string,
    additionalDetails: string | null
}

export const getCategoryDetailsByIdCategory = async (idCategory: number): Promise<CategoryDetail[] | null> => {
    try {
        const categoriesDetails: CategoryDetail[] = await queryDatabase(GET_CATEGORY_DETAILS_BY_ID_CATEGORY, [idCategory]);
        if (categoriesDetails.length > 0) {
            return categoriesDetails;
        } else {
            return null;
        }
    } catch (err) {
        throw new Error("Failed to fetch categories details");
    }
}
