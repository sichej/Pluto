import sequelize from '../../config/database/database.config'
import { Model, DataTypes } from 'sequelize'

class Report extends Model {
    public id!: number;
    public fromDate!: string;
    public toDate!: string;
    public type!: number;
    public idCategory!: number;
    public amount!: number;
}

Report.init({
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fromDate: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            len: [10,10]
        }
    },
    toDate: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            len: [10,10]
        }
    },
    type: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    idCategory: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    amount: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, { sequelize, timestamps: false })

export default Report