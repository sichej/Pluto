import { Sequelize } from "sequelize";
const dotenv = require('dotenv');

dotenv.config();

const isTestEnvironment = process.env.NODE_ENV === 'test';

const dbName = isTestEnvironment ? process.env.DB_NAME_TEST : process.env.DB_NAME;
const dbUser = isTestEnvironment ? process.env.DB_USER_TEST : process.env.DB_USER;
const dbPwd = isTestEnvironment ? process.env.DB_PWD_TEST : process.env.DB_PWD;
const dbHost = isTestEnvironment ? process.env.DB_HOST_TEST : process.env.DB_HOST;

const sequelize = new Sequelize(dbName, dbUser, dbPwd, {
    host: dbHost,
    dialect: 'mariadb'
});

export default sequelize;
