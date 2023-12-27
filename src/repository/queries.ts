export const GET_USER_BY_EMAIL = `
SELECT
    *
FROM
    Users
WHERE
    email = ?`

export const CHECK_LOGIN = `
SELECT
    email
FROM
    Users
WHERE
    email = ? and password = ?`

export const REGISTER_USER = `
INSERT INTO
    Users (email, name, password)
VALUES
    (?, ?, ?)`