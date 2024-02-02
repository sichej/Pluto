import express from 'express';
import { timeReportMiddleware } from '../../controllers/middlewares/report.middleware';
import { createReport } from '../../controllers/report/report.controllers';

const reportRouter = express.Router();

reportRouter.post('/timereport', timeReportMiddleware, createReport);

export default reportRouter;