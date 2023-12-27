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

export function queryDatabase(sql: string, values: any[]) {
    const database = process.env.NODE_ENV === 'production' ? databaseConfig : databaseTestConfig;
    return new Promise<any[]>((resolve, reject) => {
        database.query(sql, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export {databaseConfig, databaseTestConfig};
