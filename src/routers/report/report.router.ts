import express from 'express';
import { generateTimeReportController } from '../../controllers/report/report.controllers';
import { timeReportMiddleware } from '../../controllers/middlewares/report.middleware';

const reportRouter = express.Router();

reportRouter.post('/timereport', timeReportMiddleware, generateTimeReportController);

export default reportRouter;