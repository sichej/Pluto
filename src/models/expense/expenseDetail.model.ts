import sequelize from '../../config/database/database.config'
import { Model, DataTypes } from 'sequelize'

class ExpenseDetail extends Model {
    public id!: number;
    public idExpense!: number;
    public name!: string;
    public details!: string;
    public idCategory!: number;
    public idCategoyDetail!: number;
}

ExpenseDetail.init({
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    idExpense: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    details: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    idCategory: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    idCategoyDetail: {
        type: DataTypes.NUMBER,
        allowNull: true
    }
}, { sequelize, timestamps: false })

export default ExpenseDetail