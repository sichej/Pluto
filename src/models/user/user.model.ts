import sequelize from '../../config/database/database.config'
import { Model, DataTypes } from 'sequelize'

class User extends Model {
    public email!: string;
    public name!: string;
    public password!: string;
}

User.init({
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
        validate: {
            is: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})+$/
        }
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            len: [128,128]
        }
    }
}, { sequelize, timestamps: false })

export default User