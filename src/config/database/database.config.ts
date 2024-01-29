import { Sequelize } from "sequelize";
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME_TEST, process.env.DB_USER_TEST, process.env.DB_PWD_TEST, {
    host: process.env.DB_HOST_TEST,
    dialect: 'mariadb'
});

export default sequelize;
