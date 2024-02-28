import sequelize from '../../config/database/database.config'
import { Model, DataTypes } from 'sequelize'

class Income extends Model {
    public id!: number;
    public value!: number;
    public name!: string;
    public date!: string;
    public idCategory!: number;
    public email!: string;
}

Income.init({
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
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    date: {
        type: DataTypes.STRING(10),
        allowNull: false,
        validate: {
            len: [10,10]
        }
    },
    idCategory: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
}, { sequelize, timestamps: false })

export default Income