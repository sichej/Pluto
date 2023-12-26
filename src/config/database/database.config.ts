const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const databaseConfig = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});

const databaseTestConfig = mysql.createConnection({
    host: process.env.DB_HOST_TEST,
    user: process.env.DB_USER_TEST,
    password: process.env.DB_PWD_TEST,
    database: process.env.DB_NAME_TEST
});

export {databaseConfig, databaseTestConfig};
