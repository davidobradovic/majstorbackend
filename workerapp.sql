-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 29, 2025 at 10:00 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `workerapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `lat` decimal(10,8) DEFAULT NULL,
  `long` decimal(10,8) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `userId`, `name`, `lat`, `long`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Home', 43.81348400, 18.57308300, '2025-04-27 20:42:14', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `expiringFor` bigint(20) DEFAULT NULL,
  `expired` tinyint(4) DEFAULT 0,
  `createdAt` datetime DEFAULT current_timestamp(),
  `createdBy` int(11) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `createdBy` int(11) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `title`, `icon`, `createdAt`, `createdBy`, `updatedAt`) VALUES
(1, 'Aparati', '1745936664666-189431392.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(2, 'Moleraj', '1745936772010-480946423.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(3, 'Električar', '1745936862903-902378759.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(4, 'Čišćenje', '1745936867959-71239418.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(5, 'Klima uređaji', '1745936872460-437273574.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(6, 'Kućna pomoć', '1745936876891-823816977.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(7, 'Deratizacija', '1745936880634-942618882.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(8, 'Zidarski radovi', '1745936884804-644504610.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(9, 'Stolarija', '1745936889958-710630760.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(10, 'Vrt i dvorište', '1745936896242-550579025.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(11, 'IT usluge', '1745936902059-527093977.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(12, 'Transport i selidbe', '1745941033816-962467311.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(13, 'Auto usluge', '1745941038778-130921521.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(14, 'Fotografija i video', '1745941043811-600799716.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(15, 'Fitness i zdravlje', '1745941047937-109736638.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(16, 'Kućni ljubimci', '1745941052721-406498901.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(17, 'Edukacija i kursevi', '1745941057028-365992446.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(18, 'Ostalo', '1745941072585-517475688.png', '2025-04-28 15:26:58', NULL, '0000-00-00 00:00:00'),
(19, 'Keramičarski radovi', '1745941080815-497268993.png', '2025-04-28 15:29:29', NULL, '0000-00-00 00:00:00'),
(20, 'Lepota i nega', '1745941084830-368298012.png', '2025-04-28 15:29:29', NULL, '0000-00-00 00:00:00'),
(21, 'Pravne usluge', '1745941279243-384491740.png', '2025-04-28 15:29:29', NULL, '0000-00-00 00:00:00'),
(22, 'Krojačke usluge', '1745941105624-380326659.png', '2025-04-28 15:29:29', NULL, '0000-00-00 00:00:00'),
(23, 'Dizajn enterijera', '1745941109616-116138951.png', '2025-04-28 15:29:29', NULL, '0000-00-00 00:00:00'),
(24, 'Finansije i računovodstvo', '1745941124053-569914332.png', '2025-04-28 15:29:29', NULL, '0000-00-00 00:00:00'),
(25, 'Prevođenje i lektura', '1745941128294-39725366.png', '2025-04-28 15:29:29', NULL, '0000-00-00 00:00:00'),
(26, 'Staklarske usluge', '1745941132780-540747055.png', '2025-04-28 15:29:29', NULL, '0000-00-00 00:00:00'),
(27, 'Popravka elektronike', '1745941139053-260005326.png', '2025-04-28 15:29:29', NULL, '0000-00-00 00:00:00'),
(28, 'Dostava i kurirske usluge', '1745941142984-481848681.png', '2025-04-28 15:29:29', NULL, '0000-00-00 00:00:00'),
(29, 'Organizacija događaja', '1745941146726-108882205.png', '2025-04-28 15:29:29', NULL, '0000-00-00 00:00:00'),
(30, 'Nekretnine', '1745941150165-11130260.png', '2025-04-28 15:29:29', NULL, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `channel`
--

CREATE TABLE `channel` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `channel_users`
--

CREATE TABLE `channel_users` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

CREATE TABLE `document` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `documentType` enum('id','passport','driving_license') DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `type` enum('banner','avatar','image') DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `profileId` int(11) DEFAULT NULL,
  `documentId` int(11) DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL,
  `messageId` int(11) DEFAULT NULL,
  `serviceId` int(11) DEFAULT NULL,
  `uploadedAt` datetime DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `channelId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `sendAt` datetime NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customerId` int(11) DEFAULT NULL,
  `workerId` int(11) DEFAULT NULL,
  `location` int(11) DEFAULT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `phoneLocation` longtext DEFAULT NULL,
  `orderType` enum('online','sms') DEFAULT 'online',
  `description` longtext DEFAULT NULL,
  `notes` longtext DEFAULT NULL,
  `paid` tinyint(4) DEFAULT NULL,
  `paidType` enum('online','card','cash') DEFAULT NULL,
  `status` enum('requested','accepted','rejected','cancelled','inProgress','completed') DEFAULT 'requested',
  `dueDate` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `refferal`
--

CREATE TABLE `refferal` (
  `id` int(11) NOT NULL,
  `creatorId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `subcategoryId` int(11) DEFAULT NULL,
  `workerId` int(11) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `basePrice` decimal(10,2) DEFAULT NULL,
  `isAvailable` tinyint(4) DEFAULT 1,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subcategory`
--

CREATE TABLE `subcategory` (
  `id` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `createdBy` int(11) DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subcategory`
--

INSERT INTO `subcategory` (`id`, `categoryId`, `title`, `createdAt`, `createdBy`, `updatedAt`) VALUES
(3008, 31, 'Jedna podkategorija', '2025-04-29 13:39:01', NULL, '2025-04-29 13:39:01'),
(3009, 32, 'jedna', '2025-04-29 13:40:08', NULL, '2025-04-29 13:40:08'),
(3010, 32, 'druga', '2025-04-29 13:40:08', NULL, '2025-04-29 13:40:08'),
(3011, 1, 'Frižideri', '2025-04-29 14:24:24', NULL, '2025-04-29 14:24:24'),
(3012, 1, 'Veš mašine', '2025-04-29 14:24:24', NULL, '2025-04-29 14:24:24'),
(3013, 1, 'Mašine za pranje sudova', '2025-04-29 14:24:24', NULL, '2025-04-29 14:24:24'),
(3014, 1, 'Mikrotalasne rerne', '2025-04-29 14:24:24', NULL, '2025-04-29 14:24:24'),
(3015, 1, 'Šporeti i rerne', '2025-04-29 14:24:24', NULL, '2025-04-29 14:24:24'),
(3016, 1, 'Aparati za kafu', '2025-04-29 14:24:24', NULL, '2025-04-29 14:24:24'),
(3017, 1, 'Mali kućni aparati', '2025-04-29 14:24:24', NULL, '2025-04-29 14:24:24'),
(3018, 2, 'Unutrašnje farbanje', '2025-04-29 14:26:12', NULL, '2025-04-29 14:26:12'),
(3019, 2, 'Spoljašnje farbanje', '2025-04-29 14:26:12', NULL, '2025-04-29 14:26:12'),
(3020, 2, 'Dekorativno farbanje', '2025-04-29 14:26:12', NULL, '2025-04-29 14:26:12'),
(3021, 2, 'Gletovanje i priprema', '2025-04-29 14:26:12', NULL, '2025-04-29 14:26:12'),
(3022, 2, 'Oslikavanje zidova', '2025-04-29 14:26:12', NULL, '2025-04-29 14:26:12'),
(3023, 3, 'Instalacije', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3024, 3, 'Rasveta i utičnice', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3025, 3, 'Popravke', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3026, 3, 'Montaža uređaja', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3027, 3, 'Smart instalacije', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3028, 3, 'Video nadzor', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3029, 3, 'Alarmni sistemi', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3030, 3, 'Popravka kućnih aparata', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3031, 3, 'Implementacija solarnih panela', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3032, 3, 'Gromobrani', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3033, 3, 'Električni bojleri', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3034, 3, 'Automatizacija doma', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3035, 3, 'Servis UPS sistema', '2025-04-29 14:27:42', NULL, '2025-04-29 14:27:42'),
(3036, 4, 'Generalno čišćenje', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3037, 4, 'Redovno čišćenje', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3038, 4, 'Pranje tepiha', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3039, 4, 'Pranje prozora', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3040, 4, 'Posle renoviranja', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3041, 4, 'Dubinsko čišćenje nameštaja', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3042, 4, 'Dezinfekcija prostora', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3043, 4, 'Čišćenje bazena', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3044, 4, 'Uklanjanje grafita', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3045, 4, 'Čišćenje ventilacionih sistema', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3046, 4, 'Ekološko čišćenje', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3047, 4, 'Čišćenje nakon požara', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3048, 4, 'Uklanjanje neprijatnih mirisa', '2025-04-29 14:27:47', NULL, '2025-04-29 14:27:47'),
(3049, 5, 'Ugradnja', '2025-04-29 14:27:52', NULL, '2025-04-29 14:27:52'),
(3050, 5, 'Servis i održavanje', '2025-04-29 14:27:52', NULL, '2025-04-29 14:27:52'),
(3051, 5, 'Popravka', '2025-04-29 14:27:52', NULL, '2025-04-29 14:27:52'),
(3052, 5, 'Punjenje gasa', '2025-04-29 14:27:52', NULL, '2025-04-29 14:27:52'),
(3053, 5, 'Čišćenje filtera', '2025-04-29 14:27:52', NULL, '2025-04-29 14:27:52'),
(3054, 6, 'Montaža nameštaja', '2025-04-29 14:27:56', NULL, '2025-04-29 14:27:56'),
(3055, 6, 'Vodoinstalaterske usluge', '2025-04-29 14:27:56', NULL, '2025-04-29 14:27:56'),
(3056, 6, 'Baštovanstvo', '2025-04-29 14:27:56', NULL, '2025-04-29 14:27:56'),
(3057, 6, 'Majstor za sve', '2025-04-29 14:27:56', NULL, '2025-04-29 14:27:56'),
(3058, 6, 'Male popravke', '2025-04-29 14:27:56', NULL, '2025-04-29 14:27:56'),
(3059, 7, 'Insekti', '2025-04-29 14:28:00', NULL, '2025-04-29 14:28:00'),
(3060, 7, 'Glodari', '2025-04-29 14:28:00', NULL, '2025-04-29 14:28:00'),
(3061, 7, 'Preventiva', '2025-04-29 14:28:00', NULL, '2025-04-29 14:28:00'),
(3062, 7, 'Dezinfekcija', '2025-04-29 14:28:00', NULL, '2025-04-29 14:28:00'),
(3063, 7, 'Dezinsekcija', '2025-04-29 14:28:00', NULL, '2025-04-29 14:28:00'),
(3064, 8, 'Malterisanje', '2025-04-29 14:28:04', NULL, '2025-04-29 14:28:04'),
(3065, 8, 'Postavljanje blokova i cigli', '2025-04-29 14:28:04', NULL, '2025-04-29 14:28:04'),
(3066, 8, 'Sanacija pukotina', '2025-04-29 14:28:04', NULL, '2025-04-29 14:28:04'),
(3067, 8, 'Betoniranje', '2025-04-29 14:28:04', NULL, '2025-04-29 14:28:04'),
(3068, 8, 'Izrada temelja', '2025-04-29 14:28:04', NULL, '2025-04-29 14:28:04'),
(3069, 9, 'Izrada nameštaja po meri', '2025-04-29 14:28:09', NULL, '2025-04-29 14:28:09'),
(3070, 9, 'Popravka nameštaja', '2025-04-29 14:28:09', NULL, '2025-04-29 14:28:09'),
(3071, 9, 'Ugradnja vrata i prozora', '2025-04-29 14:28:09', NULL, '2025-04-29 14:28:09'),
(3072, 9, 'Brušenje i lakiranje', '2025-04-29 14:28:09', NULL, '2025-04-29 14:28:09'),
(3073, 9, 'Restauracija nameštaja', '2025-04-29 14:28:09', NULL, '2025-04-29 14:28:09'),
(3074, 10, 'Održavanje travnjaka', '2025-04-29 14:28:16', NULL, '2025-04-29 14:28:16'),
(3075, 10, 'Sadnja biljaka', '2025-04-29 14:28:16', NULL, '2025-04-29 14:28:16'),
(3076, 10, 'Sistem za navodnjavanje', '2025-04-29 14:28:16', NULL, '2025-04-29 14:28:16'),
(3077, 10, 'Uređenje dvorišta', '2025-04-29 14:28:16', NULL, '2025-04-29 14:28:16'),
(3078, 10, 'Postavljanje ograde', '2025-04-29 14:28:16', NULL, '2025-04-29 14:28:16'),
(3079, 11, 'Popravka računara', '2025-04-29 14:28:22', NULL, '2025-04-29 14:28:22'),
(3080, 11, 'Instalacija softvera', '2025-04-29 14:28:22', NULL, '2025-04-29 14:28:22'),
(3081, 11, 'Pomoć na daljinu', '2025-04-29 14:28:22', NULL, '2025-04-29 14:28:22'),
(3082, 11, 'Podešavanje mreže', '2025-04-29 14:28:22', NULL, '2025-04-29 14:28:22'),
(3083, 11, 'Izrada web sajtova', '2025-04-29 14:28:22', NULL, '2025-04-29 14:28:22'),
(3084, 11, 'SEO optimizacija', '2025-04-29 14:28:22', NULL, '2025-04-29 14:28:22'),
(3085, 11, 'Sigurnosno kopiranje podataka', '2025-04-29 14:28:22', NULL, '2025-04-29 14:28:22'),
(3086, 11, 'Oporavak podataka', '2025-04-29 14:28:22', NULL, '2025-04-29 14:28:22'),
(3087, 11, 'Cloud usluge', '2025-04-29 14:28:22', NULL, '2025-04-29 14:28:22'),
(3088, 11, 'Virtuelna stvarnost', '2025-04-29 14:28:22', NULL, '2025-04-29 14:28:22'),
(3089, 11, 'Cybersecurity', '2025-04-29 14:28:22', NULL, '2025-04-29 14:28:22'),
(3090, 11, 'Obuka za korišćenje softvera', '2025-04-29 14:28:22', NULL, '2025-04-29 14:28:22'),
(3091, 12, 'Selidbe', '2025-04-29 15:37:13', NULL, '2025-04-29 15:37:13'),
(3092, 12, 'Transport robe', '2025-04-29 15:37:13', NULL, '2025-04-29 15:37:13'),
(3093, 12, 'Demontaža i montaža nameštaja', '2025-04-29 15:37:13', NULL, '2025-04-29 15:37:13'),
(3094, 12, 'Pakovanje stvari', '2025-04-29 15:37:13', NULL, '2025-04-29 15:37:13'),
(3095, 13, 'Servis vozila', '2025-04-29 15:37:18', NULL, '2025-04-29 15:37:18'),
(3096, 13, 'Auto elektrika', '2025-04-29 15:37:18', NULL, '2025-04-29 15:37:18'),
(3097, 13, 'Zamena guma', '2025-04-29 15:37:18', NULL, '2025-04-29 15:37:18'),
(3098, 13, 'Poliranje vozila', '2025-04-29 15:37:18', NULL, '2025-04-29 15:37:18'),
(3099, 13, 'Punjenje klime', '2025-04-29 15:37:18', NULL, '2025-04-29 15:37:18'),
(3100, 13, 'Pranje i detailing', '2025-04-29 15:37:18', NULL, '2025-04-29 15:37:18'),
(3101, 13, 'Tehnički pregled', '2025-04-29 15:37:18', NULL, '2025-04-29 15:37:18'),
(3102, 13, 'Dijagnostika', '2025-04-29 15:37:18', NULL, '2025-04-29 15:37:18'),
(3103, 13, 'Šlepanje', '2025-04-29 15:37:18', NULL, '2025-04-29 15:37:18'),
(3104, 13, 'Farbarsko-lakirerski radovi', '2025-04-29 15:37:18', NULL, '2025-04-29 15:37:18'),
(3105, 13, 'Ugradnja auto opreme', '2025-04-29 15:37:18', NULL, '2025-04-29 15:37:18'),
(3106, 14, 'Fotografisanje događaja', '2025-04-29 15:37:23', NULL, '2025-04-29 15:37:23'),
(3107, 14, 'Portretna fotografija', '2025-04-29 15:37:23', NULL, '2025-04-29 15:37:23'),
(3108, 14, 'Video produkcija', '2025-04-29 15:37:23', NULL, '2025-04-29 15:37:23'),
(3109, 14, 'Montaža videa', '2025-04-29 15:37:23', NULL, '2025-04-29 15:37:23'),
(3110, 15, 'Lični trener', '2025-04-29 15:37:27', NULL, '2025-04-29 15:37:27'),
(3111, 15, 'Fizioterapija', '2025-04-29 15:37:27', NULL, '2025-04-29 15:37:27'),
(3112, 15, 'Nutricionista', '2025-04-29 15:37:27', NULL, '2025-04-29 15:37:27'),
(3113, 15, 'Online treninzi', '2025-04-29 15:37:27', NULL, '2025-04-29 15:37:27'),
(3114, 16, 'Šetanje pasa', '2025-04-29 15:37:32', NULL, '2025-04-29 15:37:32'),
(3115, 16, 'Čuvanje ljubimaca', '2025-04-29 15:37:32', NULL, '2025-04-29 15:37:32'),
(3116, 16, 'Veterinarske usluge', '2025-04-29 15:37:32', NULL, '2025-04-29 15:37:32'),
(3117, 16, 'Grooming', '2025-04-29 15:37:32', NULL, '2025-04-29 15:37:32'),
(3118, 17, 'Časovi jezika', '2025-04-29 15:37:37', NULL, '2025-04-29 15:37:37'),
(3119, 17, 'Časovi matematike', '2025-04-29 15:37:37', NULL, '2025-04-29 15:37:37'),
(3120, 17, 'Programiranje', '2025-04-29 15:37:37', NULL, '2025-04-29 15:37:37'),
(3121, 17, 'Muzika i instrumenti', '2025-04-29 15:37:37', NULL, '2025-04-29 15:37:37'),
(3122, 17, 'Priprema za prijemni ispit', '2025-04-29 15:37:37', NULL, '2025-04-29 15:37:37'),
(3123, 17, 'Pomoć pri izradi seminarskih radova', '2025-04-29 15:37:37', NULL, '2025-04-29 15:37:37'),
(3124, 17, 'Časovi umetnosti', '2025-04-29 15:37:37', NULL, '2025-04-29 15:37:37'),
(3125, 17, 'Časovi za decu', '2025-04-29 15:37:37', NULL, '2025-04-29 15:37:37'),
(3126, 17, 'Priprema za polaganje vozačkog ispita', '2025-04-29 15:37:37', NULL, '2025-04-29 15:37:37'),
(3127, 17, 'Online kursevi', '2025-04-29 15:37:37', NULL, '2025-04-29 15:37:37'),
(3128, 18, 'Bezbednosni sistemi', '2025-04-29 15:37:52', NULL, '2025-04-29 15:37:52'),
(3129, 18, 'Pametna kuća', '2025-04-29 15:37:52', NULL, '2025-04-29 15:37:52'),
(3130, 18, 'Renoviranje', '2025-04-29 15:37:52', NULL, '2025-04-29 15:37:52'),
(3131, 18, 'Bravarske usluge', '2025-04-29 15:37:52', NULL, '2025-04-29 15:37:52'),
(3132, 18, 'Hitne intervencije', '2025-04-29 15:37:52', NULL, '2025-04-29 15:37:52'),
(3133, 19, 'Postavljanje pločica', '2025-04-29 15:38:00', NULL, '2025-04-29 15:38:00'),
(3134, 19, 'Fugovanje', '2025-04-29 15:38:00', NULL, '2025-04-29 15:38:00'),
(3135, 19, 'Hidroizolacija', '2025-04-29 15:38:00', NULL, '2025-04-29 15:38:00'),
(3136, 19, 'Renoviranje kupatila', '2025-04-29 15:38:00', NULL, '2025-04-29 15:38:00'),
(3137, 19, 'Mozaik radovi', '2025-04-29 15:38:00', NULL, '2025-04-29 15:38:00'),
(3138, 19, 'Postavljanje kamena', '2025-04-29 15:38:00', NULL, '2025-04-29 15:38:00'),
(3139, 19, 'Teraco radovi', '2025-04-29 15:38:00', NULL, '2025-04-29 15:38:00'),
(3140, 20, 'Frizerske usluge', '2025-04-29 15:38:04', NULL, '2025-04-29 15:38:04'),
(3141, 20, 'Manikirske usluge', '2025-04-29 15:38:04', NULL, '2025-04-29 15:38:04'),
(3142, 20, 'Masaža', '2025-04-29 15:38:04', NULL, '2025-04-29 15:38:04'),
(3143, 20, 'Šminkanje', '2025-04-29 15:38:04', NULL, '2025-04-29 15:38:04'),
(3144, 20, 'Tretmani lica', '2025-04-29 15:38:04', NULL, '2025-04-29 15:38:04'),
(3145, 20, 'Depilacija', '2025-04-29 15:38:04', NULL, '2025-04-29 15:38:04'),
(3146, 20, 'Pedikir', '2025-04-29 15:38:04', NULL, '2025-04-29 15:38:04'),
(3147, 20, 'Tretmani tela', '2025-04-29 15:38:04', NULL, '2025-04-29 15:38:04'),
(3148, 22, 'Popravke odeće', '2025-04-29 15:38:25', NULL, '2025-04-29 15:38:25'),
(3149, 22, 'Izrada po meri', '2025-04-29 15:38:25', NULL, '2025-04-29 15:38:25'),
(3150, 22, 'Prepravke', '2025-04-29 15:38:25', NULL, '2025-04-29 15:38:25'),
(3151, 22, 'Šivenje zavesa', '2025-04-29 15:38:25', NULL, '2025-04-29 15:38:25'),
(3152, 22, 'Tapaciranje nameštaja', '2025-04-29 15:38:25', NULL, '2025-04-29 15:38:25'),
(3153, 22, 'Modne kreacije', '2025-04-29 15:38:25', NULL, '2025-04-29 15:38:25'),
(3154, 22, 'Školske uniforme', '2025-04-29 15:38:25', NULL, '2025-04-29 15:38:25'),
(3155, 23, 'Konsultacije', '2025-04-29 15:38:29', NULL, '2025-04-29 15:38:29'),
(3156, 23, '3D vizualizacija', '2025-04-29 15:38:29', NULL, '2025-04-29 15:38:29'),
(3157, 23, 'Odabir nameštaja', '2025-04-29 15:38:29', NULL, '2025-04-29 15:38:29'),
(3158, 23, 'Odabir boja i tekstura', '2025-04-29 15:38:29', NULL, '2025-04-29 15:38:29'),
(3159, 23, 'Plan rasporeda', '2025-04-29 15:38:29', NULL, '2025-04-29 15:38:29'),
(3160, 23, 'Stilizovanje prostora', '2025-04-29 15:38:29', NULL, '2025-04-29 15:38:29'),
(3161, 23, 'Renoviranje enterijera', '2025-04-29 15:38:29', NULL, '2025-04-29 15:38:29'),
(3162, 23, 'Feng Shui konsultacije', '2025-04-29 15:38:29', NULL, '2025-04-29 15:38:29'),
(3163, 24, 'Knjigovodstvo', '2025-04-29 15:38:44', NULL, '2025-04-29 15:38:44'),
(3164, 24, 'Poresko savetovanje', '2025-04-29 15:38:44', NULL, '2025-04-29 15:38:44'),
(3165, 24, 'Finansijsko planiranje', '2025-04-29 15:38:44', NULL, '2025-04-29 15:38:44'),
(3166, 24, 'Izrada biznis planova', '2025-04-29 15:38:44', NULL, '2025-04-29 15:38:44'),
(3167, 24, 'Obračun plata', '2025-04-29 15:38:44', NULL, '2025-04-29 15:38:44'),
(3168, 24, 'Izrada finansijskih izveštaja', '2025-04-29 15:38:44', NULL, '2025-04-29 15:38:44'),
(3169, 24, 'Lični finansijski savetnik', '2025-04-29 15:38:44', NULL, '2025-04-29 15:38:44'),
(3170, 25, 'Prevođenje dokumenata', '2025-04-29 15:38:48', NULL, '2025-04-29 15:38:48'),
(3171, 25, 'Simultano prevođenje', '2025-04-29 15:38:48', NULL, '2025-04-29 15:38:48'),
(3172, 25, 'Lektura tekstova', '2025-04-29 15:38:48', NULL, '2025-04-29 15:38:48'),
(3173, 25, 'Prevođenje sajta', '2025-04-29 15:38:48', NULL, '2025-04-29 15:38:48'),
(3174, 25, 'Sudsko prevođenje', '2025-04-29 15:38:48', NULL, '2025-04-29 15:38:48'),
(3175, 25, 'Titlovanje video materijala', '2025-04-29 15:38:48', NULL, '2025-04-29 15:38:48'),
(3176, 25, 'Stručni prevodi', '2025-04-29 15:38:48', NULL, '2025-04-29 15:38:48'),
(3177, 26, 'Zamena stakla', '2025-04-29 15:38:52', NULL, '2025-04-29 15:38:52'),
(3178, 26, 'Stakleni paneli', '2025-04-29 15:38:52', NULL, '2025-04-29 15:38:52'),
(3179, 26, 'Ogledala', '2025-04-29 15:38:52', NULL, '2025-04-29 15:38:52'),
(3180, 26, 'Staklene pregrade', '2025-04-29 15:38:52', NULL, '2025-04-29 15:38:52'),
(3181, 26, 'Popravka prozora', '2025-04-29 15:38:52', NULL, '2025-04-29 15:38:52'),
(3182, 26, 'Umetničko staklo', '2025-04-29 15:38:52', NULL, '2025-04-29 15:38:52'),
(3183, 26, 'Izolaciono staklo', '2025-04-29 15:38:52', NULL, '2025-04-29 15:38:52'),
(3184, 27, 'Popravka mobilnih telefona', '2025-04-29 15:38:59', NULL, '2025-04-29 15:38:59'),
(3185, 27, 'Popravka televizora', '2025-04-29 15:38:59', NULL, '2025-04-29 15:38:59'),
(3186, 27, 'Popravka audio uređaja', '2025-04-29 15:38:59', NULL, '2025-04-29 15:38:59'),
(3187, 27, 'Popravka konzola za igre', '2025-04-29 15:38:59', NULL, '2025-04-29 15:38:59'),
(3188, 27, 'Popravka tableta', '2025-04-29 15:38:59', NULL, '2025-04-29 15:38:59'),
(3189, 27, 'Dijagnostika elektronskih uređaja', '2025-04-29 15:38:59', NULL, '2025-04-29 15:38:59'),
(3190, 27, 'Popravka dronova', '2025-04-29 15:38:59', NULL, '2025-04-29 15:38:59'),
(3191, 28, 'Dostava paketa', '2025-04-29 15:39:03', NULL, '2025-04-29 15:39:03'),
(3192, 28, 'Hitna dostava', '2025-04-29 15:39:03', NULL, '2025-04-29 15:39:03'),
(3193, 28, 'Dostava hrane', '2025-04-29 15:39:03', NULL, '2025-04-29 15:39:03'),
(3194, 28, 'Međunarodno slanje', '2025-04-29 15:39:03', NULL, '2025-04-29 15:39:03'),
(3195, 28, 'Dostava namirnica', '2025-04-29 15:39:03', NULL, '2025-04-29 15:39:03'),
(3196, 28, 'Isporuka cveća', '2025-04-29 15:39:03', NULL, '2025-04-29 15:39:03'),
(3197, 28, 'Preuzimanje i dostava', '2025-04-29 15:39:03', NULL, '2025-04-29 15:39:03'),
(3198, 29, 'Rođendanske proslave', '2025-04-29 15:39:06', NULL, '2025-04-29 15:39:06'),
(3199, 29, 'Venčanja', '2025-04-29 15:39:06', NULL, '2025-04-29 15:39:06'),
(3200, 29, 'Korporativni događaji', '2025-04-29 15:39:06', NULL, '2025-04-29 15:39:06'),
(3201, 29, 'Dečije zabave', '2025-04-29 15:39:06', NULL, '2025-04-29 15:39:06'),
(3202, 29, 'Ketering', '2025-04-29 15:39:06', NULL, '2025-04-29 15:39:06'),
(3203, 29, 'Iznajmljivanje opreme', '2025-04-29 15:39:06', NULL, '2025-04-29 15:39:06'),
(3204, 29, 'Dekoracija prostora', '2025-04-29 15:39:06', NULL, '2025-04-29 15:39:06'),
(3205, 29, 'Muzički izvođači', '2025-04-29 15:39:06', NULL, '2025-04-29 15:39:06'),
(3206, 30, 'Procena vrednosti', '2025-04-29 15:39:10', NULL, '2025-04-29 15:39:10'),
(3207, 30, 'Agencijske usluge', '2025-04-29 15:39:10', NULL, '2025-04-29 15:39:10'),
(3208, 30, 'Upravljanje imovinom', '2025-04-29 15:39:10', NULL, '2025-04-29 15:39:10'),
(3209, 30, 'Pravni saveti za nekretnine', '2025-04-29 15:39:10', NULL, '2025-04-29 15:39:10'),
(3210, 30, 'Energetski pasoš', '2025-04-29 15:39:10', NULL, '2025-04-29 15:39:10'),
(3211, 30, 'Izdavanje nekretnina', '2025-04-29 15:39:10', NULL, '2025-04-29 15:39:10'),
(3212, 30, 'Home staging', '2025-04-29 15:39:10', NULL, '2025-04-29 15:39:10'),
(3213, 21, 'Pravni saveti', '2025-04-29 15:41:19', NULL, '2025-04-29 15:41:19'),
(3214, 21, 'Izrada ugovora', '2025-04-29 15:41:19', NULL, '2025-04-29 15:41:19'),
(3215, 21, 'Rešavanje sporova', '2025-04-29 15:41:19', NULL, '2025-04-29 15:41:19'),
(3216, 21, 'Zastupanje', '2025-04-29 15:41:19', NULL, '2025-04-29 15:41:19'),
(3217, 21, 'Pravna dokumentacija', '2025-04-29 15:41:19', NULL, '2025-04-29 15:41:19'),
(3218, 21, 'Porodično pravo', '2025-04-29 15:41:19', NULL, '2025-04-29 15:41:19'),
(3219, 21, 'Imovinsko-pravni odnosi', '2025-04-29 15:41:19', NULL, '2025-04-29 15:41:19'),
(3223, 33, 'test 1', '2025-04-29 15:47:40', NULL, '2025-04-29 15:47:40'),
(3224, 33, 'test 2', '2025-04-29 15:47:40', NULL, '2025-04-29 15:47:40'),
(3225, 34, 'ddd', '2025-04-29 15:52:07', NULL, '2025-04-29 15:52:07'),
(3226, 34, 'eee', '2025-04-29 15:52:07', NULL, '2025-04-29 15:52:07');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(45) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('user','worker') DEFAULT NULL,
  `workerId` int(11) DEFAULT NULL,
  `usedRefferal` int(11) DEFAULT NULL,
  `refferal` int(11) DEFAULT NULL,
  `bannedAt` datetime DEFAULT NULL,
  `banReason` longtext DEFAULT NULL,
  `bannedBy` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `role`, `workerId`, `usedRefferal`, `refferal`, `bannedAt`, `banReason`, `bannedBy`, `createdAt`, `updatedAt`) VALUES
(1, 'David Obradović', 'david.obradovic@example.com', 'securePassword123', 'user', 101, 5, 3, NULL, NULL, NULL, '2025-04-27 20:28:04', '2025-04-27 20:28:04');

-- --------------------------------------------------------

--
-- Table structure for table `worker_profile`
--

CREATE TABLE `worker_profile` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `status` enum('active','inactive','banned') DEFAULT NULL,
  `verificationStatus` enum('confirmed','failed') DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `channel`
--
ALTER TABLE `channel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `channel_users`
--
ALTER TABLE `channel_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `refferal`
--
ALTER TABLE `refferal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `worker_profile`
--
ALTER TABLE `worker_profile`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `channel`
--
ALTER TABLE `channel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `channel_users`
--
ALTER TABLE `channel_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `refferal`
--
ALTER TABLE `refferal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3227;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `worker_profile`
--
ALTER TABLE `worker_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
