import sequelize from '../../config/database/database.config'
import { Model, DataTypes } from 'sequelize'

class Expense extends Model {
    public id!: number;
    public value!: number;
    public date!: string;
}

Expense.init({
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            len: [10,10]
        }
    }
}, { sequelize, timestamps: false })

export default Expense