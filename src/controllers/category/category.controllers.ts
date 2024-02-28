import { Request, Response, Router } from 'express';
import { HTTP_Codes } from '../../repository/httpCodes';
import CategoryService from '../../services/category/category.service';
import CategoryDetailService from '../../services/category/categoryDetail.service';
import CategoryIncomeService from '../../services/category/categoryIncome.service';

export const getAllCategories = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await CategoryService.getAllCategories();
        if (!categories) {
            res.status(HTTP_Codes.NOT_FOUND).json({ message: 'Categories not found' });
            return;
        }
        res.status(HTTP_Codes.OK).send(categories);
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};

export const getAllCategoriesIncome = async (req: Request, res: Response): Promise<void> => {
    try {
        const categories = await CategoryIncomeService.getAllCategoriesIncome();
        if (!categories) {
            res.status(HTTP_Codes.NOT_FOUND).json({ message: 'Categories not found' });
            return;
        }
        res.status(HTTP_Codes.OK).send(categories);
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};

export const getCategoryById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.body.id;
        const category = await CategoryService.getCategoryById(id);
        if (!category) {
            res.status(HTTP_Codes.NOT_FOUND).json({ message: 'Category not found' });
            return;
        }
        res.status(HTTP_Codes.OK).send(category);
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};

export const getCategoryIncomeById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.body.id;
        const category = await CategoryIncomeService.getCategoryIncomeById(id);
        if (!category) {
            res.status(HTTP_Codes.NOT_FOUND).json({ message: 'Category not found' });
            return;
        }
        res.status(HTTP_Codes.OK).send(category);
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};

export const getCategoryDetailsByIdCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const idCategory = req.body.idCategory;
        const categoryDetails = await CategoryDetailService.getCategoryDetailsByIdCategory(idCategory);
        if (!categoryDetails) {
            res.status(HTTP_Codes.NOT_FOUND).json({ message: 'Category details not found' });
            return;
        }
        res.status(HTTP_Codes.OK).send(categoryDetails);
    } catch (error) {
        res.status(HTTP_Codes.INTERNAL_SERVER_ERROR).send({ error: error.message });
    }
};