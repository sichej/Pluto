-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Creato il: Feb 02, 2024 alle 09:17
-- Versione del server: 10.4.21-MariaDB
-- Versione PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Pluto_test`
--
CREATE DATABASE IF NOT EXISTS `Pluto_test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `Pluto_test`;

-- --------------------------------------------------------

--
-- Struttura della tabella `Categories`
--

CREATE TABLE `Categories` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `Categories`
--

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

-- --------------------------------------------------------

--
-- Struttura della tabella `CategoryDetails`
--

CREATE TABLE `CategoryDetails` (
  `id` int(11) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `details` varchar(60) NOT NULL,
  `additionalDetails` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `CategoryDetails`
--

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

-- --------------------------------------------------------

--
-- Struttura della tabella `ExpenseDetails`
--

CREATE TABLE `ExpenseDetails` (
  `id` int(11) NOT NULL,
  `idExpense` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `details` varchar(100) DEFAULT NULL,
  `idCategory` int(11) NOT NULL,
  `idCategoryDetail` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struttura della tabella `Expenses`
--

CREATE TABLE `Expenses` (
  `id` int(11) NOT NULL,
  `value` double NOT NULL,
  `date` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struttura della tabella `Reports`
--

CREATE TABLE `Reports` (
  `id` int(11) NOT NULL,
  `fromDate` varchar(10) NOT NULL,
  `toDate` varchar(10) NOT NULL,
  `type` int(11) NOT NULL,
  `idCategory` int(11) DEFAULT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struttura della tabella `ReportTypes`
--

CREATE TABLE `ReportTypes` (
  `id` int(11) NOT NULL,
  `type` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `ReportTypes`
--

INSERT INTO `ReportTypes` (`id`, `type`) VALUES
(1, 'weekly'),
(2, 'monthly'),
(3, 'custom');

-- --------------------------------------------------------

--
-- Struttura della tabella `UserExpenses`
--

CREATE TABLE `UserExpenses` (
  `userEmail` varchar(100) NOT NULL,
  `idExpense` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struttura della tabella `Users`
--

CREATE TABLE `Users` (
  `email` varchar(100) NOT NULL,
  `name` varchar(30) NOT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `Users`
--

INSERT INTO `Users` (`email`, `name`, `password`) VALUES
('test@pluto.com', 'Test', 'a4abd4448c49562d828115d13a1fccea927f52b4d5459297f8b43e42da89238bc13626e43dcb38ddb082488927ec904fb42057443983e88585179d50551afe62');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `CategoryDetails`
--
ALTER TABLE `CategoryDetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category-detail` (`idCategory`);

--
-- Indici per le tabelle `ExpenseDetails`
--
ALTER TABLE `ExpenseDetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `expense-detail` (`idExpense`),
  ADD KEY `expense-category` (`idCategory`),
  ADD KEY `expense-categoryDetail` (`idCategoryDetail`);

--
-- Indici per le tabelle `Expenses`
--
ALTER TABLE `Expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `Reports`
--
ALTER TABLE `Reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `report-type` (`type`);

--
-- Indici per le tabelle `ReportTypes`
--
ALTER TABLE `ReportTypes`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `UserExpenses`
--
ALTER TABLE `UserExpenses`
  ADD KEY `user-expense` (`userEmail`),
  ADD KEY `expense-user` (`idExpense`);

--
-- Indici per le tabelle `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `Categories`
--
ALTER TABLE `Categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT per la tabella `CategoryDetails`
--
ALTER TABLE `CategoryDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT per la tabella `ExpenseDetails`
--
ALTER TABLE `ExpenseDetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT per la tabella `Expenses`
--
ALTER TABLE `Expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;

--
-- AUTO_INCREMENT per la tabella `Reports`
--
ALTER TABLE `Reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la tabella `ReportTypes`
--
ALTER TABLE `ReportTypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `CategoryDetails`
--
ALTER TABLE `CategoryDetails`
  ADD CONSTRAINT `category-detail` FOREIGN KEY (`idCategory`) REFERENCES `Categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `ExpenseDetails`
--
ALTER TABLE `ExpenseDetails`
  ADD CONSTRAINT `expense-category` FOREIGN KEY (`idCategory`) REFERENCES `Categories` (`id`),
  ADD CONSTRAINT `expense-categoryDetail` FOREIGN KEY (`idCategoryDetail`) REFERENCES `categorydetails` (`id`),
  ADD CONSTRAINT `expense-expenseDetail` FOREIGN KEY (`idExpense`) REFERENCES `Expenses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `Reports`
--
ALTER TABLE `Reports`
  ADD CONSTRAINT `report-type` FOREIGN KEY (`type`) REFERENCES `reporttypes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `UserExpenses`
--
ALTER TABLE `UserExpenses`
  ADD CONSTRAINT `expense-user` FOREIGN KEY (`idExpense`) REFERENCES `Expenses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user-expense` FOREIGN KEY (`userEmail`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
