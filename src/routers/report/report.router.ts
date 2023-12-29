import express from 'express';
import { generateTimeCategoryReportController, generateTimeReportController } from '../../controllers/report/report.controllers';
import { timeCategoryReportMiddleware, timeReportMiddleware } from '../../controllers/middlewares/report.middleware';

const reportRouter = express.Router();

reportRouter.post('/timereport', timeReportMiddleware, generateTimeReportController);
reportRouter.post('/timecategoryreport', timeCategoryReportMiddleware, generateTimeCategoryReportController);

export default reportRouter;