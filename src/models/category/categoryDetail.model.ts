import sequelize from '../../config/database/database.config'
import { DataTypes } from 'sequelize'
import Category from './category.model';

class CategoryDetail extends Category {
    public id!: number;
    public idCategory!: number;
    public details!: string;
    public additionalDetails!: string;
}

CategoryDetail.init({
    id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true
    },
    idCategory: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    details: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    additionalDetails: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, { sequelize, timestamps: false })

export default CategoryDetail