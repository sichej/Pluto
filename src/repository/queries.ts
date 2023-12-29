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

export const NEW_EXPENSE = `
INSERT INTO
    Expenses (value, date)
VALUES
    (?, ?)`

export const NEW_EXPENSE_DETAILS = `
INSERT INTO
    ExpensesDetails (idExpense, name, details, idCategory, idCategoryDetail)
VALUES
    (?, ?, ?, ?, ?)`

export const ADD_EXPENSE_TO_USER = `
INSERT INTO
    UserExpense (idExpense, emailUser)
VALUES
    (?, ?)`

export const TIME_REPORT = `
SELECT
    SUM(Expenses.value) as total
FROM
    Expenses
INNER JOIN UserExpense ON Expenses.id = UserExpense.idExpense
WHERE
    UserExpense.emailUser = ?
AND Expenses.date >= ?
AND Expenses.date <= ?`