import sequelize from '../../config/database/database.config'
import { Model, DataTypes } from 'sequelize'

class Category extends Model {
    public id!: number;
    public name!: string;
}

Category.init({
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

export default Category