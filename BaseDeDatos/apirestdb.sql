-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-05-2022 a las 01:40:10
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `apirestdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `type` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `img` varchar(191) NOT NULL,
  `price` double(8,2) NOT NULL,
  `stockQty` int(11) NOT NULL,
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`type`, `name`, `img`, `price`, `stockQty`, `id`, `created_at`, `updated_at`) VALUES
('anime', 'Fullmetal Alchemist: Brotherhood', 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', 1009.02, 20, 1, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Gintama Temporada 4', 'https://cdn.myanimelist.net/images/anime/3/72078.jpg', 551.66, 5, 2, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Shingeki no Kyojin Temporada 3 Parte 2', 'https://cdn.myanimelist.net/images/anime/1517/100633.jpg', 1203.84, 20, 3, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Steins;Gate', 'https://cdn.myanimelist.net/images/anime/5/73199.jpg', 208.26, 10, 4, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Gintama Temporada 2', 'https://cdn.myanimelist.net/images/anime/4/50361.jpg', 551.66, 5, 5, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Gintama: The Very Final', 'https://cdn.myanimelist.net/images/anime/1988/113791.jpg', 151.23, 5, 6, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Hunter x Hunter', 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg', 1648.63, 15, 7, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Gintama: Enchousen', 'https://cdn.myanimelist.net/images/anime/6/75172.jpg', 369.00, 5, 8, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Fruits Basket: The Final Season', 'https://cdn.myanimelist.net/images/anime/1085/114792.jpg', 373.00, 10, 9, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Gintama Season 5', 'https://cdn.myanimelist.net/images/anime/3/83528.jpg', 256.64, 5, 10, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', '3-gatsu no Lion Temporada 2', 'https://cdn.myanimelist.net/images/anime/3/88469.jpg', 368.32, 5, 11, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Owarimonogatari Segunda Temporada', 'https://cdn.myanimelist.net/images/anime/6/87322.jpg', 765.10, 5, 12, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Koe no Katachi', 'https://cdn.myanimelist.net/images/anime/1122/96435.jpg', 562.40, 10, 13, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Gintama', 'https://cdn.myanimelist.net/images/anime/10/73274.jpg', 2068.30, 3, 14, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Violet Evergarden Pelicula', 'https://cdn.myanimelist.net/images/anime/1825/110716.jpg', 0.00, 2, 15, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Clannad: After Story', 'https://cdn.myanimelist.net/images/anime/1299/110774.jpg', 1294.23, 3, 16, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare', 'https://cdn.myanimelist.net/images/anime/10/51723.jpg', 432.74, 5, 17, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Code Geass: Hangyaku no Lelouch R2', 'https://cdn.myanimelist.net/images/anime/4/9391.jpg', 748.96, 8, 18, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Kimetsu no Yaiba: Yuukaku-hen', 'https://cdn.myanimelist.net/images/anime/1908/120036.jpg', 1450.00, 20, 19, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('anime', 'Kimi no Na wa.', 'https://cdn.myanimelist.net/images/anime/5/87048.jpg', 736.94, 15, 20, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', '2020 Ironheart (2020) #2', 'http://i.annihil.us/u/prod/marvel/i/mg/2/00/5f0cbcefa582a/portrait_fantastic.jpg', 80.00, 20, 21, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Thunderbolts (2022) #2', 'http://i.annihil.us/u/prod/marvel/i/mg/9/f0/624f46ccb98c6/portrait_fantastic.jpg', 70.00, 10, 22, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'X-Men Unlimited: X-Men Green (2022) #2', 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/624f470626be2/portrait_fantastic.jpg', 80.00, 12, 23, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Gambit (2022) #3', 'http://i.annihil.us/u/prod/marvel/i/mg/d/80/62684682b0272/portrait_fantastic.jpg', 70.00, 8, 24, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Thor (2020) #27 (Variant)', 'http://i.annihil.us/u/prod/marvel/i/mg/7/50/626847e9a9ea5/portrait_fantastic.jpg', 70.00, 5, 25, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'AMAZING SPIDER-MAN 1 FACSIMILE EDITION (2022) #1', 'http://i.annihil.us/u/prod/marvel/i/mg/5/d0/6202ecc5f2730/portrait_fantastic.jpg', 100.00, 10, 26, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Deadpool: Bad Blood (2022) #4', 'http://i.annihil.us/u/prod/marvel/i/mg/3/60/624f475bb9114/portrait_fantastic.jpg', 70.00, 9, 27, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Thor (2020) #27', 'http://i.annihil.us/u/prod/marvel/i/mg/3/90/626846fda0373/portrait_fantastic.jpg', 70.00, 5, 28, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Iron Fist (2022) #5', 'http://i.annihil.us/u/prod/marvel/i/mg/3/90/624f4646b564a/portrait_fantastic.jpg', 70.00, 8, 29, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Thunderbolts (2022) #1', 'http://i.annihil.us/u/prod/marvel/i/mg/5/80/622a2960e2b1a/portrait_fantastic.jpg', 80.00, 15, 30, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Star Wars: Doctor Aphra (2020) #23', 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/626846e30fffb/portrait_fantastic.jpg', 65.00, 5, 31, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Avengers Forever (2021) #8', 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/6268464e4405f/portrait_fantastic.jpg', 70.00, 10, 32, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Captain Marvel (2019) #40', 'http://i.annihil.us/u/prod/marvel/i/mg/3/70/6268466bdd006/portrait_fantastic.jpg', 65.00, 4, 33, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Daredevil (2022) #2 (Variant)', 'http://i.annihil.us/u/prod/marvel/i/mg/4/80/6268476ee947b/portrait_fantastic.jpg', 80.00, 12, 34, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Star Wars (2020) #26', 'http://i.annihil.us/u/prod/marvel/i/mg/d/90/626846e323560/portrait_fantastic.jpg', 70.00, 10, 35, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'X-Force (2019) #30', 'http://i.annihil.us/u/prod/marvel/i/mg/1/10/6268471d8c447/portrait_fantastic.jpg', 65.00, 7, 36, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'X-Men (2021) #13', 'http://i.annihil.us/u/prod/marvel/i/mg/6/c0/626847fff124a/portrait_fantastic.jpg', 70.00, 13, 37, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Captain Carter (2022) #5', 'http://i.annihil.us/u/prod/marvel/i/mg/4/00/62684669a2e2f/portrait_fantastic.jpg', 80.00, 20, 38, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'New Mutants (2019) #28', 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/626846c29533c/portrait_fantastic.jpg', 70.00, 8, 39, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('comic', 'Fantastic Four (2018) #46', 'http://i.annihil.us/u/prod/marvel/i/mg/3/90/6268466fec031/portrait_fantastic.jpg', 65.00, 6, 40, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('manga', 'Berserk', 'https://api-cdn.myanimelist.net/images/manga/1/157897.jpg', 1200.00, 12, 41, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('manga', 'Fullmetal Alchemist', 'https://api-cdn.myanimelist.net/images/manga/3/243675.jpg', 2000.00, 15, 42, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('manga', 'JoJo no Kimyou na Bouken Part 7: Steel Ball Run', 'https://api-cdn.myanimelist.net/images/manga/3/179882.jpg', 500.00, 16, 43, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('manga', 'Vinland Saga', 'https://api-cdn.myanimelist.net/images/manga/2/188925.jpg', 4400.00, 10, 44, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('manga', 'One Punch-Man', 'https://api-cdn.myanimelist.net/images/manga/3/80661.jpg', 3400.00, 18, 45, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('manga', 'Chainsaw Man', 'https://api-cdn.myanimelist.net/images/manga/3/216464.jpg', 2000.00, 15, 46, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('manga', 'Hunter x Hunter', 'https://api-cdn.myanimelist.net/images/manga/2/253119.jpg', 5000.00, 10, 47, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('manga', 'Death Note', 'https://api-cdn.myanimelist.net/images/manga/1/258245.jpg', 1500.00, 16, 48, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('manga', 'Akira', 'https://api-cdn.myanimelist.net/images/manga/2/157929.jpg', 3500.00, 20, 49, '2022-05-17 16:48:32', '2022-05-17 16:48:32'),
('manga', 'Spy x Family', 'https://api-cdn.myanimelist.net/images/manga/3/219741.jpg', 1600.00, 10, 50, '2022-05-17 16:48:32', '2022-05-17 16:48:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2022_05_17_144353_create_articulos_table', 2),
(6, '2016_06_01_000001_create_oauth_auth_codes_table', 3),
(7, '2016_06_01_000002_create_oauth_access_tokens_table', 3),
(8, '2016_06_01_000003_create_oauth_refresh_tokens_table', 3),
(9, '2016_06_01_000004_create_oauth_clients_table', 3),
(10, '2016_06_01_000005_create_oauth_personal_access_clients_table', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(6, 1, 'Tumanga', NULL, NULL, 'google.com', 0, 0, 0, '2022-05-19 08:10:55', '2022-05-19 08:10:55');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'client',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `type`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Tilin Gigachad', 'tilin@gmail.com', NULL, '$2y$10$hnQBPngAb2xaBFMVctNjFOTylzSBODvXSlt6XJFQtqNyerW9wnfKO', 'admin', NULL, '2022-05-18 08:08:09', '2022-05-18 08:08:09'),
(2, 'El pepe', 'pepe@gmail.com', NULL, '$2y$10$pbmdrl/mqSArlhm6Z5hytOQIreCjEd8cdREt.7wCoIE2iXHial.re', 'admin', NULL, '2022-05-18 22:55:44', '2022-05-18 22:55:44');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
