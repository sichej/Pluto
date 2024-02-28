import express from 'express';
import { categoryDetailsMiddleware, categoryMiddleware } from '../../controllers/middlewares/category.middleware';
import { getAllCategories, getAllCategoriesIncome, getCategoryById, getCategoryDetailsByIdCategory, getCategoryIncomeById } from '../../controllers/category/category.controllers';

const categoryRouter = express.Router();

categoryRouter.get('/getallcategory', getAllCategories);
categoryRouter.get('/getallcategoryincome', getAllCategoriesIncome);
categoryRouter.post('/getcategorybyid', categoryMiddleware, getCategoryById);
categoryRouter.post('/getcategoryincomebyid', categoryMiddleware, getCategoryIncomeById);
categoryRouter.post('/getcategorydetailsbyidcategory', categoryDetailsMiddleware, getCategoryDetailsByIdCategory);

export default categoryRouter;