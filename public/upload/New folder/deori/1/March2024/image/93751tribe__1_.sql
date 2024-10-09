-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2024 at 12:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arunachal_pradesh`
--

-- --------------------------------------------------------

--
-- Table structure for table `tribe`
--

CREATE TABLE `tribe` (
  `id` int(11) NOT NULL,
  `tribe_category_id` int(11) NOT NULL DEFAULT 0,
  `tribe_name` varchar(50) DEFAULT NULL,
  `tribe_slug` varchar(100) DEFAULT NULL,
  `about_tribe` varchar(250) DEFAULT NULL,
  `history_tribe` varchar(250) DEFAULT NULL,
  `distribution_tribe` varchar(250) DEFAULT NULL,
  `primary_image` varchar(250) DEFAULT NULL,
  `img2` varchar(250) DEFAULT NULL,
  `img3` varchar(250) DEFAULT NULL,
  `is_status` int(11) NOT NULL DEFAULT 0,
  `is_deleted` int(11) NOT NULL DEFAULT 0,
  `created_date` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `is_approved` int(11) NOT NULL DEFAULT 0,
  `approved_date` datetime DEFAULT NULL,
  `admin_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tribe`
--

INSERT INTO `tribe` (`id`, `tribe_category_id`, `tribe_name`, `tribe_slug`, `about_tribe`, `history_tribe`, `distribution_tribe`, `primary_image`, `img2`, `img3`, `is_status`, `is_deleted`, `created_date`, `user_id`, `is_approved`, `approved_date`, `admin_id`) VALUES
(1, 0, 'Adi', 'adi', 'The Adis, one of the most forwarding looking and exceptionally independent character tribe are found in the temperate and subtropical regions within the districts of Siang, East Siang, Upper Siang, parts of West Siang, Lower Dibang Valley, Lohit.', 'They trace their ancestry from Pedung Nane and their descents from Abotani, have a patriarchal society, and accordingly descent is traced from father and children belongs to the father. ', NULL, 'adi1.jpg\r\n', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(2, 0, 'Apatani', 'aptani', 'The tribe with a population of little over fifty thousand people are concentrated in the beckoning pine mettled Ziro valley popularly known as \'Apatani Plateau\'.', 'The Apatanis in the past could be distinguished from other tribal communities by their face tattoos and nose plugs among the women. ', NULL, 'apatani1.jpg\r\n', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(3, 0, 'Buguns', 'buguns', 'The Buguns, formerly known as the Khowas are a small group of people of Indo Mongoloid stock scattered over Singchung Sub-division, Thrizino circle, Tenga valley, Wanhoo village, Jamiri circle and Bichom village.', 'They have migrated from a place called Zamkham, and as per their mythology, all the living creatures including the humans on earth are the offsprings of Amua Nini - the mother and Aphua Phumphulwa - the father.', NULL, 'Bugun1', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(4, 0, 'Deori', 'deori', 'The Deoris call themselves \"Jimochayan,\" which translates to \"children of the Sun\" in their native Deori language.', 'Some sources suggest their original homeland might lie within the present-day boundaries of Arunachal Pradesh, along the banks of rivers like Dibang and Tengapani.', NULL, 'deori1.jpg\r\n', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(5, 0, 'Galo', 'galo', 'The Galos are admirably colourful and comparatively advanced tribe primarily inhabiting West Siang, Lower Siang and Leparada districts of Arunachal Pradesh, ', 'The tribe has been erroneously recorded as Gallong since 1950 but got it rectified to Galo under Constitution (Schedule Tribe) Order (Amendment) Act 2011.', NULL, 'galo1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(6, 0, 'Hrusso and Koro Aka', 'hrusso-and-koro-aka', 'The term \'Aka\' denoting \'painted\' is a name given by the plains people largely because of tribe\'s custom of painting their faces profusely.  ', 'The Hrusso Akas believe themselves to have had descended on the earth in a silver and golden ladders, once settled in the plains of Assam and finally pushed themselves up towards the hills after a feud. ', NULL, 'hrusso1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(7, 0, 'Idu', 'idu', 'The Idu Mishmi, also known as simply \"Idu\", are a significant sub-tribe within the broader Mishmi group inhabiting the northeastern Indian state of Arunachal Pradesh.', 'Traditionally follow animism, revering Maselo-Zinu and Nani Intaya as creators of the universe and mankind. An Igu (shaman) holds a respected position in their society, acting as a spiritual guide and healer.', NULL, 'Idu1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(8, 0, 'Khamba', 'khamba', 'The Khamba, also known as Khemba, are a fascinating indigenous community residing in the Upper Siang district of Arunachal Pradesh, India, near the borders with Tibet and Bhutan. ', 'Their language, Khamba, belongs to the Tibeto-Burman language family, suggesting potential connections with communities inhabiting the eastern Himalayas.', NULL, 'Khamba1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(9, 0, 'Khaman', 'khaman', 'Traditionally, the Kamans followed an animistic religion, worshipping spirits of nature and their ancestors. However, with changing times, some have converted to Christianity', 'Their origin stories suggest migration from Kachin country in Burma.The Kamans speak languages belonging to the Midzu branch of the Tibeto-Burman language family.', NULL, 'Kaman1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(10, 0, 'Khamyang ', 'khamyang ', 'The Khamyang people, also known as Tai-Khamyang or Shyam, are a fascinating subgroup of the Tai peoples in Arunachal Pradesh.', 'Their origins are likely connected to the Tai migration from southern China into Southeast Asia around the 12th century.\r\nFacing potential oppression from the Singpho people, some Khamyang migrated to Assam in the 18th and 19th centuries.', NULL, 'khamyang1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(11, 0, 'Karbi', 'karbi', 'The Karbis have a rich oral tradition with folktales, songs, and epics passed down through generations.Their traditional attire reflects their cultural identity, with men wearing dhotis and kurtas and women adorning themselves with colorful beads and', 'Primarily concentrated in Assam, the Karbis also have a presence in Arunachal Pradesh, particularly near the border regions.', NULL, 'karbi1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(12, 0, 'Monpa', 'monpa', 'The Monpas are a community of people famed for their gentle temperament, exceptionally amenable and courteous manners. They are mainly concentrated in westernmost districts of Tawang and West Kameng of Arunachal Pradesh.', 'The Monpas are believed to have migrated from Bhutan, Sikkim and Phari in Tibetan Autonomous region. The Tawang Monpas claim their migration from Changrelung in Tibet. Ethnically, they are a distinct group having affinity with Bhutanese and Tibetans.', NULL, 'Monpa1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(13, 0, 'Memba', 'memba', 'Memba, also known by the Tibetan term Neh-nang, meaning, \"people living in the holy place\", are a cluster of people occupying the higher reaches of Mechuka valley in Shi Yomi district, and Tuting and Gelling valleys.', 'The tribe in the past identified themselves as Pachakshrisba after Pachakshiri, the old name of Mechuka. ', NULL, 'Memba1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(14, 0, 'Meyor', 'meyor', 'Found in the Anjaw district, particularly in the Kibithoo and Walong circles, nestled amidst the rugged landscape. Their population is estimated to be quite small, possibly under 1000 individuals, making them a vulnerable tribe facing the risk of gra', 'There are theories suggesting their migration from Tibet, settling near the Lohit River in Arunachal Pradesh [The Meyors of first Indian Village \'Kaho\'- The Sentinels of the Country - Arunachal].', NULL, 'Meyor1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(15, 0, 'Mishing', 'mishing', 'The Mishing, also known as the Miri, are an indigenous ethnic group inhabiting parts of Assam and Arunachal Pradesh in Northeast India. With a rich history, vibrant culture, and unique traditions.', 'Believed to have migrated from present-day Myanmar and China around 2,000 years ago, settling along the banks of the Brahmaputra River. Established independent village communities practicing subsistence agriculture, fishing, and hunting.', NULL, 'miri1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(16, 0, 'Nyishi', 'nyishi', 'The Nyishis, the most populous tribe of Arunachal Pradesh numbering around three lakhs are spread across eight districts - East Kameng, Pakke Kessang, Papum Pare, Lower Subansiri, Kamle, Kurung Kumey, Kra Daadi and parts of Upper Subansiri.', 'They are Indo Mongoloid by ethnicity, north Assam group of Tibeto Burman by language family and could trace their ancestral descends from the eponymous ancestor \'Abotani\' whom they believe was progenitor of many an ethnic communities.', NULL, 'nyishi1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(17, 0, 'Nah Tagin', 'nah-tagin', 'The Tagins, about seventy thousand souls, are one of the significant tribes living in the dreary and inhospitable terrains of Upper Subansiri and some adjoining parts of West Siang and Shi Yomi districts of Arunachal Pradesh.', 'The tribe draw their lineage from Abu Tani or Abotani, the legendary forefather of many other tribes across the region. They are of Mongoloid origin by ethnic community and their language comes under North Assam group.', NULL, 'tagin1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(18, 0, 'Nocte', 'nocte', 'The tribe is known for their chieftainship practice, headhunting but now a thing of past, tattooing, flintlock rifles, woodcrafts, rich culture and administrative skills with grassroot level of democracy.', 'this tribe is ethnically related to Konyak Naga, their origin can be traced back to the Hukong Valley in Myanmar from where they migrated from between 1670 -1700 AD.', NULL, 'nocte1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(19, 0, 'Puroik', 'puroik', 'The Puroiks, who figured not so very long ago as Sulung in administrative records, a term which they have since spurned implying derogatory, are one of the most backward of the 26 tribal communities in the state of Arunachal Pradesh. ', 'They are spread over a wide area ranging from East Kameng in the west to Pakke Kessang, Kurung Kumey and Kra Daadi in the east besides rehabilitation centres at Tippi in West Kameng and Papu Nallah in the state Capital Itanagar.', NULL, 'puroik1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(20, 0, 'Sartang', 'sartang', 'The erstwhile ethnic group called Bootpa, Butpa, Matchopa or But Monpa now constitute the Sartang tribe which got recognised as a separate tribe under the Constitution (Schedule Tribe) Order (Amendment) Act 2021 with retrospective effect on 13th Augu', 'The tribe has an estimated population of 4000 to 5000 and lives in Jerigaon and Khoina of Nafra circle and Khoitam and Rahung of Thembang circle in West Kameng district, Arunachal Pradesh. ', NULL, 'sajlong1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(21, 0, 'Sajolang', 'sajolang', 'The Sajolang, erstwhile Miji, or as they call themselves, Nìmmai - Dhàmmai are scattered over 25 villages in Nafra circle of West Kameng and dozen a villages and hamlets in Lada circle of East Kameng. ', 'The Sajolang traces their origin from Abugupham Bamo, their first ancestor born out of the union of Earth and Sky as couple. As regards to their migration, the Sajolang tradition says that their forefathers had climbed down from sky in a silver ladde', NULL, 'sajlong1.jpg', NULL, NULL, 0, 1, '2024-03-06 18:38:39', 0, 0, NULL, 0),
(22, 0, 'Sherdukpen ', 'sherdukpen ', 'The name Sherdukpen is apparently derived from the toponyms of their two main cantonments, Shergaon and Rupa, that is the first syllable of Shergaon and the other from Thukpen, the old name of Rupa (Sher + Tukpen = Sherdukpen). ', 'The Sherdukpens are an ethnic group of around 9663 souls found mostly in the enchanting valleys of Shergaon, Jigaon, Rupa and the rolling hills of Thongri in the south western part of West Kameng district, Arunachal Pradesh.', NULL, 'Sherdukpen1.jpg', NULL, NULL, 1, 1, '2024-03-07 08:12:59', 0, 0, NULL, 0),
(23, 0, 'Singpho', 'singpho', 'The Singphos, though numerically a minor ethnic group with just 8000 souls or so, are one of a significant tribe of the Northeast India whose name figured prominently in the frontier history of the region post Burmese (Myanmarise) expulsion from Assa', 'The Singphos are reported to have made their first appearance in northeast region about 1793 during the troubled time of the Maomaria rebellion in the reign of Raja Gaurinath. They made their way from their original settlements near the source of Irr', NULL, 'singpho1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(24, 0, 'Taraon', 'taraon', 'the Taraons have more affinity with the Kamans (Miju Mishmi) of the Lohit and Anjaw districts. The Idus are traditionally animists and, the pantheon of Gods and spirits is rather elaborate.', 'Taraon or Digaru Mishmi and Kaman or Miju Mishmi have migrated from present day Myanmar following the course of Lohit river.', NULL, 'taraon1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(25, 0, 'Tangsa', 'tangsa', 'The term Tangsa is an umbrella term given to an ethnic group comprising a number of subtribes and living in the valleys of Changlang district, Arunachal Pradesh.', 'Many Tangsas tell of their origin from a place called Masoi Sinrapum what is now Mongolia, migrated through the South - West China Province of Yunan into Myanmar.', NULL, 'tangsa1.jpg', NULL, NULL, 0, 0, NULL, 0, 0, NULL, 0),
(26, 0, 'Tusta', 'tusta', 'Tusta tribe might have had historical ties with the Nocte tribe, allowing them to manufacture and sell salt in towns of the Assam plains [Tribal Culture, Faith, History And Literature: Tangsas Of Arunachal Pradesh].', 'They are particularly known for their unique way of living, culture and traditions among other tribes.', NULL, 'tutsa1.jpg', NULL, NULL, 0, 0, NULL, 0, 0, NULL, 0),
(27, 0, 'Tai Khamti', 'tai-khamti', 'The tribe has an approximate population of 12,653 people (2011 census) living in 42 villages in Namsai district. They are of Shan extraction and speaks the southwestern Daic Tai language.', 'The Tai Khamti, who find a place of pride in the frontier history of Northeast for the resistance they offered to the British ruler during the early days of annexation of Assam in 1820s, are one of the prominent and enterprising tribes.', NULL, 'khampti1.jpg', '', '', 1, 0, NULL, 0, 0, NULL, 0),
(28, 0, 'Wancho', 'wancho', 'The Enigmatic Wancho Tribe of Arunachal Pradesh\r\nThe Wancho tribe, also known as Wancho Naga or Eastern Naga, inhabits the Longding district of Arunachal Pradesh, India, nestled amidst the Patkai Hills. ', 'Believed to be of Tibeto-Burman ancestry, sharing similarities with other Naga tribes like the Konyak and Nocte.\r\nThey are one of the few Naga tribes who still predominantly practice animism, believing in the existence of various spirits and deities.', NULL, 'wancho1.jpg', NULL, NULL, 0, 0, NULL, 0, 0, NULL, 0),
(29, 0, 'Yobin', 'yobin', 'The Yobin community in Arunachal Pradesh comprises around 5,000 individuals.\r\nThey primarily reside in the Changlang district, with villages located far from major towns and cities.', 'The exact origins of the Yobin people remain unclear, but their language points towards a possible connection with communities inhabiting the eastern Himalayas.', NULL, 'yobin1.jpg', NULL, NULL, 0, 0, NULL, 0, 0, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tribe`
--
ALTER TABLE `tribe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_tribe_users` (`user_id`),
  ADD KEY `FK_tribe_admin` (`admin_id`),
  ADD KEY `FK_tribe_master_tribe_category` (`tribe_category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tribe`
--
ALTER TABLE `tribe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=238;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
