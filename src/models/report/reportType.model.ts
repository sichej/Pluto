import sequelize from '../../config/database/database.config'
import { Model, DataTypes } from 'sequelize'

class ReportType extends Model {
    public id!: number;
    public fromDate!: string;
    public toDate!: string;
    public type!: number;
    public idCategory!: number;
    public amount!: number;
}

ReportType.init({
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
}, { sequelize, timestamps: false })

export default ReportType