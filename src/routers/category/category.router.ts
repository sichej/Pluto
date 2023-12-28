import express from 'express';
import { getAllCategoryController, getCategoryByIdController, getCategoryDetailsByIdCategoryController } from '../../controllers/category/category.controllers';
import { categoryDetailsMiddleware, categoryMiddleware } from '../../controllers/middlewares/category.middleware';

const categoryRouter = express.Router();

categoryRouter.get('/getallcategory', getAllCategoryController);
categoryRouter.post('/getcategorybyid', categoryMiddleware, getCategoryByIdController);
categoryRouter.post('/getcategorydetailsbyidcategory', categoryDetailsMiddleware, getCategoryDetailsByIdCategoryController);

export default categoryRouter;