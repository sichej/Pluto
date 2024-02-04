import { Sequelize } from "sequelize";
const dotenv = require('dotenv');

dotenv.config();

const isTestEnvironment = process.env.NODE_ENV === 'test';

const dbName = isTestEnvironment ? process.env.MYSQL_DATABASE_TEST : process.env.MYSQL_DATABASE;
const dbUser = isTestEnvironment ? process.env.MYSQL_USER_TEST : process.env.MYSQL_USER;
const dbPwd = isTestEnvironment ? process.env.MYSQL_PASSWORD_TEST : process.env.MYSQL_PASSWORD;
const dbHost = isTestEnvironment ? process.env.MYSQL_HOST_TEST : process.env.MYSQL_HOST;

const sequelize = new Sequelize(dbName as string, dbUser as string, dbPwd, {
    host: dbHost,
    dialect: 'mariadb'
});

export default sequelize;
