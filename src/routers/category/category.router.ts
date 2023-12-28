import express from 'express';
import { getAllCategoryController, getCategoryByIdController, getCategoryDetailsByIdCategoryController } from '../../controllers/category/category.controllers';

const categoryRouter = express.Router();

categoryRouter.get('/getallcategory', getAllCategoryController);
categoryRouter.post('/getcategorybyid', getCategoryByIdController);
categoryRouter.post('/getcategorydetailsbyidcategory', getCategoryDetailsByIdCategoryController);

export default categoryRouter;