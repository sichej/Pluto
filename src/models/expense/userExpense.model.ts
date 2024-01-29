import sequelize from '../../config/database/database.config'
import { Model, DataTypes } from 'sequelize'

class UserExpense extends Model {
    public userEmail!: string;
    public idExpense!: number;
}

UserExpense.init({
    userEmail: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    idExpense: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, { sequelize, timestamps: false })
UserExpense.removeAttribute('id');
export default UserExpense