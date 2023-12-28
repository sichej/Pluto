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
export const GET_CATEGORIES = `
SELECT
    id, name
FROM
    Categories`
export const GET_CATEGORY_BY_ID = `
SELECT
    id, name
FROM
    Categories
WHERE
    id = ?`
export const GET_CATEGORY_DETAILS_BY_ID_CATEGORY = `
SELECT
    id, idCategory, details, additionalDetails
FROM
    CategoriesDetails
WHERE
    idCategory = ?`