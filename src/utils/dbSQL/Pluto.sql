SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE DATABASE IF NOT EXISTS `Pluto` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `Pluto`;


CREATE TABLE `Categories` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `Categories` (`id`, `name`) VALUES
(1, 'Food'),
(2, 'Sport'),
(3, 'Transportation'),
(4, 'Clothing'),
(5, 'Health'),
(6, 'Education'),
(7, 'Travel'),
(8, 'Gifts & Donation'),
(9, 'Insurance'),
(10, 'Technology & Electronics'),
(11, 'Subscriptions & Memberships'),
(12, 'Pets'),
(13, 'Hobbies & Recreation'),
(14, 'Books & Magazines'),
(15, 'Investments');


CREATE TABLE `CategoryIncomes` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `CategoryIncomes` (`id`, `name`) VALUES
(1, 'Salary'),
(2, 'Gift');


CREATE TABLE `CategoryDetails` (
  `id` int(11) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `details` varchar(60) NOT NULL,
  `additionalDetails` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `CategoryDetails` (`id`, `idCategory`, `details`, `additionalDetails`) VALUES
(3, 1, 'Grocery', NULL),
(4, 1, 'Takeout', 'Delivery'),
(5, 2, 'Gym Membership', NULL),
(6, 2, 'Sporting Equipment', NULL),
(7, 1, 'Dining Out', NULL),
(8, 1, 'Snacks and Beverages', 'Extra food outdoor, little snacks '),
(9, 7, 'Lodging', 'Expenses for accommodation during travel, including hotel stays, vacation rentals, hostels, or camping site fees.'),
(10, 7, 'Sightseeing and Entertainment', 'Costs related to tourist attractions, museum tickets, tours, excursions, events, or other leisure activities while traveling.'),
(11, 7, 'Travel Insurance', NULL);


CREATE TABLE `Incomes` (
  `id` int(11) NOT NULL,
  `value` float NOT NULL,
  `date` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `ExpenseDetails` (
  `id` int(11) NOT NULL,
  `idExpense` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `details` varchar(100) DEFAULT NULL,
  `idCategory` int(11) NOT NULL,
  `idCategoryDetail` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `Expenses` (
  `id` int(11) NOT NULL,
  `value` double NOT NULL,
  `date` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `Reports` (
  `id` int(11) NOT NULL,
  `fromDate` varchar(10) NOT NULL,
  `toDate` varchar(10) NOT NULL,
  `type` int(11) NOT NULL,
  `idCategory` int(11) DEFAULT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `ReportTypes` (
  `id` int(11) NOT NULL,
  `type` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `ReportTypes` (`id`, `type`) VALUES
(1, 'weekly'),
(2, 'monthly'),
(3, 'custom');


CREATE TABLE `UserExpenses` (
  `userEmail` varchar(100) NOT NULL,
  `idExpense` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `Users` (
  `email` varchar(100) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `CategoryIcons` (
  `iconString` varchar(25) NOT NULL,
  `idCategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `CategoryIcons` (`iconString`, `idCategory`) VALUES
('barbell', 2),
('pizza', 1),
('car-sport', 3),
('shirt', 4),
('medkit', 5),
('book', 6),
('airplane', 7),
('gift', 8),
('accessibility', 9),
('phone-portrait', 10),
('caret-forward-circle', 11),
('paw', 12),
('people', 13),
('book', 14),
('analytics', 15);


INSERT INTO `Users` (`email`, `name`, `password`) VALUES
('test@pluto.com', 'Test', 'a4abd4448c49562d828115d13a1fccea927f52b4d5459297f8b43e42da89238bc13626e43dcb38ddb082488927ec904fb42057443983e88585179d50551afe62');


ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `CategoryIncomes`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `Incomes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userIncome` (`email`),
  ADD KEY `categoryIncome` (`idCategory`);


ALTER TABLE `CategoryDetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category-detail` (`idCategory`);


ALTER TABLE `ExpenseDetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `expense-detail` (`idExpense`),
  ADD KEY `expense-category` (`idCategory`),
  ADD KEY `expense-categoryDetail` (`idCategoryDetail`);


ALTER TABLE `Expenses`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `Reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `report-type` (`type`);


ALTER TABLE `ReportTypes`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `UserExpenses`
  ADD KEY `user-expense` (`userEmail`),
  ADD KEY `expense-user` (`idExpense`);

ALTER TABLE `CategoryIcons`
  ADD KEY `icon-category` (`idCategory`);


ALTER TABLE `Users`
  ADD PRIMARY KEY (`email`);


ALTER TABLE `Categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;


ALTER TABLE `CategoryDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

ALTER TABLE `CategoryIncomes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


ALTER TABLE `Incomes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;


ALTER TABLE `ExpenseDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;


ALTER TABLE `Expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;


ALTER TABLE `Reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;


ALTER TABLE `ReportTypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;


ALTER TABLE `CategoryDetails`
  ADD CONSTRAINT `category-detail` FOREIGN KEY (`idCategory`) REFERENCES `Categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE `ExpenseDetails`
  ADD CONSTRAINT `expense-category` FOREIGN KEY (`idCategory`) REFERENCES `Categories` (`id`),
  ADD CONSTRAINT `expense-categoryDetail` FOREIGN KEY (`idCategoryDetail`) REFERENCES `CategoryDetails` (`id`),
  ADD CONSTRAINT `expense-expenseDetail` FOREIGN KEY (`idExpense`) REFERENCES `Expenses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE `Reports`
  ADD CONSTRAINT `report-type` FOREIGN KEY (`type`) REFERENCES `ReportTypes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;


ALTER TABLE `UserExpenses`
  ADD CONSTRAINT `expense-user` FOREIGN KEY (`idExpense`) REFERENCES `Expenses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user-expense` FOREIGN KEY (`userEmail`) REFERENCES `Users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Incomes`
  ADD CONSTRAINT `categoryIncome` FOREIGN KEY (`idCategory`) REFERENCES `CategoryIncomes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userIncome` FOREIGN KEY (`email`) REFERENCES `Users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `CategoryIcons`
  ADD CONSTRAINT `icon-category` FOREIGN KEY (`idCategory`) REFERENCES `Categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;