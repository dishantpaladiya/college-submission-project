-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2025 at 12:58 PM
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
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner_data`
--

CREATE TABLE `banner_data` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `details` varchar(255) NOT NULL,
  `paragraph` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banner_data`
--

INSERT INTO `banner_data` (`id`, `image`, `details`, `paragraph`) VALUES
(1, 'b4.jpg', 'Time to fly', '\"Ready for Adventure? Take Flight with Our Drones Today!\"'),
(2, 'b5.jpg', 'Unleash the Power of Flight', 'Discover a new world from above with our high-performance drones');

-- --------------------------------------------------------

--
-- Table structure for table `ex`
--

CREATE TABLE `ex` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ex`
--

INSERT INTO `ex` (`id`, `name`) VALUES
(1, 'a'),
(2, 'c'),
(3, 'd');

-- --------------------------------------------------------

--
-- Table structure for table `fnq`
--

CREATE TABLE `fnq` (
  `id` int(255) NOT NULL,
  `que` varchar(255) NOT NULL,
  `ans` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fnq`
--

INSERT INTO `fnq` (`id`, `que`, `ans`) VALUES
(1, 'What is the most popular type of drone?', 'The main drone type most people fly is a quadcopter. A quadcopter gets its name from having four propellers, or rotors, as they\'re also called. But quadcopters are just one type of drone.'),
(2, 'Which drone has greatest range?', 'With up to 32 km of flight distance, DJI Air 3S and DJI Air 3 are the longest-range DJI drones currently available. While Mavic 3 Pro remains at the top of the DJI consumer drone flight time list, Air 3S benefits from the next-gen O4 HD video transmission'),
(3, 'Are drones a robot?', 'Yes, a drone is a type of robot. Drones, also known as unmanned aerial vehicles (UAVs), are aircraft that can fly autonomously or be remotely controlled without a pilot on board. They combine robotics and aeronautics to achieve sustained flight. Common de');

-- --------------------------------------------------------

--
-- Table structure for table `login_data`
--

CREATE TABLE `login_data` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login_data`
--

INSERT INTO `login_data` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', 'admin@123'),
(26, 'ankita@gmail.com', 'ankita'),
(27, 'prince@gmail.com', 'prince');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `products` text DEFAULT NULL,
  `mobileNumber` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `address` text NOT NULL,
  `cashOnDelivery` tinyint(1) DEFAULT NULL,
  `totalAmount` decimal(10,2) DEFAULT NULL,
  `created_at` int(11) NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `products`, `mobileNumber`, `email`, `address`, `cashOnDelivery`, `totalAmount`, `created_at`) VALUES
(1, '[{\"id\":\"1\",\"name\":\"ACR Systems-15mm Rods \",\"price\":300,\"img\":\"assets\\/images\\/p1.jpg\",\"quantity\":1,\"itemTotal\":300},{\"id\":\"2\",\"name\":\"Woo Estes Proto X SLT\\u00a0Nano\",\"price\":100,\"img\":\"assets\\/images\\/p2.jpg\",\"quantity\":1,\"itemTotal\":100}]', '6351793925', 'admin@gmail.com', '27,srushti row house', 1, 400.00, 2147483647),
(2, '[{\"id\":\"1\",\"name\":\"ACR Systems-15mm Rods \",\"price\":300,\"img\":\"assets\\/images\\/p1.jpg\",\"quantity\":1,\"itemTotal\":300}]', '7896541230', 'janki@gmail.com', '27', 1, 300.00, 2147483647),
(3, '[{\"id\":\"3\",\"name\":\"GoProfessional Ronin-M Gimbal  \",\"price\":125,\"img\":\"assets\\/images\\/p3.jpg\",\"quantity\":1,\"itemTotal\":125}]', '6351793925', 'janki@gmail.com', 'sfvdfb', 1, 125.00, 2147483647),
(4, '[{\"id\":\"1\",\"name\":\"ACR Systems-15mm Rods \",\"price\":300,\"img\":\"assets\\/images\\/p1.jpg\",\"quantity\":2,\"itemTotal\":600},{\"id\":\"3\",\"name\":\"GoProfessional Ronin-M Gimbal  \",\"price\":125,\"img\":\"assets\\/images\\/p3.jpg\",\"quantity\":1,\"itemTotal\":125}]', '6351793925', 'admin@gmail.com', '27,srushti row huse', 1, 725.00, 2147483647),
(5, '[{\"id\":\"1\",\"name\":\"ACR Systems-15mm Rods \",\"price\":300,\"img\":\"assets\\/images\\/p1.jpg\",\"quantity\":1,\"itemTotal\":300}]', '6351793925', 'admin@gmail.com', '27,srushti row- 2', 1, 300.00, 2147483647),
(6, '[{\"id\":\"1\",\"name\":\"ACR Systems-15mm Rods \",\"price\":300,\"img\":\"assets\\/images\\/p1.jpg\",\"quantity\":1,\"itemTotal\":300}]', '6351793925', 'janki@gmail.com', ' srushti 27', 1, 300.00, 2147483647),
(7, '[{\"id\":\"2\",\"name\":\"Woo Estes Proto X SLT\\u00a0Nano\",\"price\":100,\"img\":\"assets\\/images\\/p2.jpg\",\"quantity\":1,\"itemTotal\":100}]', '7984427398', 'admin@gmail.com', 'vadodara', 1, 100.00, 2147483647),
(8, '[{\"id\":\"47\",\"name\":\"ACR Systems-15mm Rods \",\"price\":300,\"img\":\"assets\\/images\\/p1.jpg\",\"quantity\":1,\"itemTotal\":300},{\"id\":\"1\",\"name\":\"ACR Systems-15mm Rods \",\"price\":300,\"img\":\"assets\\/images\\/p1.jpg\",\"quantity\":2,\"itemTotal\":600},{\"id\":\"4\",\"name\":\" Inspire 1 - Zenmuse X3\\u00a0Gimbal\\u00a0\",\"price\":245,\"img\":\"assets\\/images\\/p4.jpg\",\"quantity\":2,\"itemTotal\":490}]', '7412589630', 'prince@gmail.com', 'surat', 1, 1390.00, 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `razorpay_order_id` varchar(100) NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `currency` varchar(10) NOT NULL,
  `order_status` enum('Pending','Completed','Failed') DEFAULT 'Pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `order_item_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `razorpay_payment_id` varchar(100) NOT NULL,
  `payment_signature` varchar(255) NOT NULL,
  `payment_status` enum('Success','Failed') NOT NULL DEFAULT 'Success',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `image`, `name`, `price`) VALUES
(1, 'p1.jpg', 'ACR Systems-15mm Rods ', '300'),
(2, 'p2.jpg', 'Woo Estes Proto X SLT Nano', '100'),
(3, 'p3.jpg', 'GoProfessional Ronin-M Gimbal  ', '125'),
(4, 'p4.jpg', ' Inspire 1 - Zenmuse X3 Gimbal ', '245');

-- --------------------------------------------------------

--
-- Table structure for table `services_data`
--

CREATE TABLE `services_data` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `details` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services_data`
--

INSERT INTO `services_data` (`id`, `image`, `details`) VALUES
(1, 's1.svg', 'Free shipping over 1000'),
(2, 's2.svg', 'money back guaratee'),
(3, 's3.svg', 'dedicated service team'),
(4, 's4.svg', 'online support 24/7');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile_number` varchar(10) NOT NULL,
  `address` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner_data`
--
ALTER TABLE `banner_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ex`
--
ALTER TABLE `ex`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fnq`
--
ALTER TABLE `fnq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login_data`
--
ALTER TABLE `login_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`order_item_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services_data`
--
ALTER TABLE `services_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner_data`
--
ALTER TABLE `banner_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ex`
--
ALTER TABLE `ex`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `fnq`
--
ALTER TABLE `fnq`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `login_data`
--
ALTER TABLE `login_data`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `services_data`
--
ALTER TABLE `services_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
