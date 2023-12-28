import { Request, Response } from 'express';
import { HTTP_Codes } from '../../repository/httpCodes';
import { getAllCategories, getCategoryById } from '../../services/category/category.services';
import { getCategoryDetailsByIdCategory } from '../../services/category/categoryDetail.service';

export const getAllCategoryController = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await getAllCategories();
        if (!categories) {
            res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send();
            return;
        }
        res.status(HTTP_Codes.OK).send(categories);
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};

export const getCategoryByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = req.body.id;
        const category = await getCategoryById(id);
        if (!category) {
            res.status(HTTP_Codes.NOT_FOUND).send('Category not found');
            return;
        }
        res.status(HTTP_Codes.OK).send(category);
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};

export const getCategoryDetailsByIdCategoryController = async (req: Request, res: Response): Promise<void> => {
    try {
        const idCategory: number = req.body.idCategory;
        const categoryDetails = await getCategoryDetailsByIdCategory(idCategory);
        if (!categoryDetails) {
            res.status(HTTP_Codes.NOT_FOUND).send('Category details not found');
            return;
        }
        res.status(HTTP_Codes.OK).send(categoryDetails);
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};