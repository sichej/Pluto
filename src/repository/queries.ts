export const GET_USER_BY_EMAIL = `
SELECT
    *
FROM
    Users
WHERE
    email = ?`