import sequelize from '../../config/database/database.config';
import Report from '../../models/report/report.model';
import { TIME_AMOUNT_EXPENSE } from '../../repository/queries';
import { QueryTypes } from "sequelize";


interface SumExpenses {
    total: number;
}

class ReportService {
    static async createReport(fromDate: string, toDate: string, type: number, idCategory: number | null, amount: number): Promise<Report> {
        try {
            const newReport = await Report.create({ fromDate, toDate, type, idCategory, amount });
            return newReport;
        } catch (error) {
            throw new Error(`Failed to create report: ${error.message}`);
        }
    }


    static async getReportById(id: number): Promise<Report | null> {
        try {
            const report = await Report.findByPk(id);
            if (!report) {
                return null;
            }
            return report;
        } catch (error) {
            throw new Error(`Failed to retrieve report: ${error.message}`);
        }
    }

    static async getGeneralAmountForReport(userEmail: string, fromDate: string, toDate: string): Promise<number> {
        try {
            const result = await sequelize.query(TIME_AMOUNT_EXPENSE,
            {
                replacements: { userEmail: userEmail, fromDate: fromDate, toDate: toDate },
                type: QueryTypes.SELECT
            });
            if (!result.length) {
                return 0;
            }
            return Number((result[0] as SumExpenses).total);
        } catch (error) {
            throw new Error(`Failed to retrieve report: ${error.message}`);
        }
    }
}

export default ReportService;

