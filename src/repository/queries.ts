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