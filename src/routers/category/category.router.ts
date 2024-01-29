import express from 'express';
import { categoryDetailsMiddleware, categoryMiddleware } from '../../controllers/middlewares/category.middleware';
import { getAllCategories, getCategoryById, getCategoryDetailsByIdCategory } from '../../controllers/category/category.controllers';

const categoryRouter = express.Router();

categoryRouter.get('/getallcategory', getAllCategories);
categoryRouter.post('/getcategorybyid', categoryMiddleware, getCategoryById);
categoryRouter.post('/getcategorydetailsbyidcategory', categoryDetailsMiddleware, getCategoryDetailsByIdCategory);

export default categoryRouter;