import sequelize from '../../config/database/database.config'
import { Model, DataTypes } from 'sequelize'

class CategoryIncome extends Model {
    public id!: number;
    public name!: string;
}

CategoryIncome.init({
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
}, { sequelize, timestamps: false })

export default CategoryIncome