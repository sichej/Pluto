import ReportType from '../../models/report/reportType.model';

class ReportTypeService {
    
    static async getReportTypeById(id: number): Promise<ReportType | null> {
        try {
            const reportType = await ReportType.findByPk(id);
            if (!reportType) {
                return null;
            }
            return reportType;
        } catch (error) {
            throw new Error(`Failed to retrieve report type: ${error.message}`);
        }
    }

    static async getAllReportTypes(): Promise<ReportType[]> {
        try {
            const reportTypes = await ReportType.findAll();
            return reportTypes;
        } catch (error) {
            throw new Error(`Failed to retrieve report types: ${error.message}`);
        }
    }
}

export default ReportTypeService;

