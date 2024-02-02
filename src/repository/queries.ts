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

export const TIME_AMOUNT_EXPENSE = `
SELECT
    SUM(Expenses.value) as total
FROM
    Expenses
INNER JOIN UserExpenses ON Expenses.id = UserExpenses.idExpense
INNER JOIN ExpenseDetails ON Expenses.id = ExpenseDetails.idExpense
WHERE
    UserExpenses.userEmail = :userEmail
AND Expenses.date >= :fromDate
AND Expenses.date <= :toDate`

export const TIME_AMOUNT_CATEGORY_EXPENSE = `
SELECT
    SUM(Expenses.value) as total
FROM
    Expenses
INNER JOIN UserExpense ON Expenses.id = UserExpense.idExpense
INNER JOIN ExpensesDetails ON Expenses.id = ExpensesDetails.idExpense
WHERE
    UserExpense.userEmail = :userEmail
AND Expenses.date >= :fromDate
AND Expenses.date <= :toDate
AND ExpensesDetails.idCategory = :idCategory`