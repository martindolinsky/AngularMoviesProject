-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 10, 2021 at 01:17 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `movieDatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `commentID` int(11) NOT NULL,
  `userID` bigint(20) NOT NULL,
  `date` datetime NOT NULL,
  `message` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `movieID` int(5) DEFAULT NULL,
  `serialID` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `movieID` int(5) NOT NULL,
  `titleEN` varchar(200) NOT NULL,
  `titleSK` varchar(200) NOT NULL,
  `genre` varchar(200) NOT NULL,
  `year` int(4) NOT NULL,
  `director` varchar(200) NOT NULL,
  `actors` text NOT NULL,
  `description` text NOT NULL,
  `secondTitleEN` varchar(200) NOT NULL,
  `secondTitleSK` varchar(200) NOT NULL,
  `src` varchar(200) NOT NULL,
  `srcImg` varchar(200) NOT NULL,
  `length` int(3) NOT NULL,
  `imdbSrc` varchar(300) NOT NULL,
  `dataTitle` varchar(200) NOT NULL,
  `data_title` varchar(255) DEFAULT NULL,
  `imdb_src` varchar(255) DEFAULT NULL,
  `second_titleen` varchar(255) DEFAULT NULL,
  `second_titlesk` varchar(255) DEFAULT NULL,
  `src_img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`movieID`, `titleEN`, `titleSK`, `genre`, `year`, `director`, `actors`, `description`, `secondTitleEN`, `secondTitleSK`, `src`, `srcImg`, `length`, `imdbSrc`, `dataTitle`, `data_title`, `imdb_src`, `second_titleen`, `second_titlesk`, `src_img`) VALUES
(1, 'Joker', 'Joker', 'Crime,Drama,Thriller', 2019, 'Todd Phillips', 'Joaquin Phoenix, Robert De Niro, Zazie Beetz', 'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: \"The Joker\".', ' ', ' ', 'https://www.youtube.com/embed/zAGVQLHvwOY', '../assets/img/movies/joker-2019.jpg', 122, 'https://www.imdb.com/title/tt7286456/?ref_=plg_rt_1', 'tt7286456', NULL, NULL, NULL, NULL, NULL),
(2, 'Avengers:', 'Avengers:', 'Action, Adventure, Sci-Fi', 2019, 'Anthony Russo, Joe Russo', 'Robert Downey Jr., Chris Evans, Mark Ruffalo', 'After the devastating events of Avengers: Infinity war (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.', 'Endgame', 'Koniec hry', 'https://www.youtube.com/embed/TcMBFSGVi1c', '../assets/img/movies/avengers-endgame.jpg', 181, '1', 'tt4154796', NULL, NULL, NULL, NULL, NULL),
(3, 'Frozen', 'Ľadové', 'Animation, Adventure, Comedy', 2019, 'Chris Buck, Jennifer Lee', 'Kristen Bell, Idina Menzel, Josh Gad', 'Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa\'s powers in order to save their kingdom.', 'II', 'kráľovstvo 2', 'https://www.youtube.com/embed/bwzLiQZDw2I', '../assets/img/movies/frozen-two.jpg', 103, '', 'tt4520988', NULL, NULL, NULL, NULL, NULL),
(4, 'Avengers:', 'Avengers:', 'Action, Adventure, Sci-Fi', 2018, 'Anthony Russo, Joe Russo', 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo', 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.', 'Infinity War', 'Nekonečná vojna', 'https://www.youtube.com/embed/6ZfuNTqbHE8', '../assets/img/movies/avengers-infinity-war.jpg', 149, '', 'tt4154756', NULL, NULL, NULL, NULL, NULL),
(5, 'It', 'To', 'Drama, Fantasy, Horror', 2019, 'Andy Muschietti', 'Jessica Chastain, James McAvoy, Bill Hader', 'Twenty-seven years after their first encounter with the terrifying Pennywise, the Losers Club have grown up and moved away, until a devastating phone call brings them back.', 'Chapter Two', 'Kapitola 2', 'https://www.youtube.com/embed/xhJ5P7Up3jA', '../assets/img/movies/it-chapter-two.jpg', 169, '', 'tt7349950', NULL, NULL, NULL, NULL, NULL),
(6, 'It', 'To', 'Drama, Fantasy, Horror', 2017, 'Andy Muschietti', 'Bill Skarsgård, Jaeden Martell, Finn Wolfhard', 'In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.', '', '', 'https://www.youtube.com/embed/FnCdOQsX5kc', '../assets/img/movies/it-2017.jpg', 135, '', 'tt1396484', NULL, NULL, NULL, NULL, NULL),
(7, 'Frozen', 'Ľadové', 'Animation, Adventure, Comedy', 2013, 'Chris Buck, Jennifer Lee', 'Kristen Bell, Idina Menzel, Jonathan Groff', 'When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.', '', 'kráľovstvo', 'https://www.youtube.com/embed/TbQm5doF_Uc', '../assets/img/movies/frozen-2013.jpg', 102, '', 'tt2294629', NULL, NULL, NULL, NULL, NULL),
(8, 'The', 'Avengers', 'Action, Adventure, Sci-Fi', 2012, 'Joss Whedon', 'Robert Downey Jr., Chris Evans, Scarlett Johansson', 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.', 'Avengers', 'Pomstitelia', 'https://www.youtube.com/embed/eOrNdBpGMv8', '../assets/img/movies/avengers-2012.jpg', 143, '1', 'tt0848228', NULL, NULL, NULL, NULL, NULL),
(9, 'Avengers:', 'Avengers 2:', 'Action, Adventure, Sci-Fi', 2015, 'Joss Whedon', 'Robert Downey Jr., Chris Evans, Mark Ruffalo', 'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it\'s up to Earth\'s mightiest heroes to stop the villainous Ultron from enacting his terrible plan.', 'Age of Ultron', 'Vek Ultrona', 'https://www.youtube.com/embed/tmeOjFno6Do', '../assets/img/movies/avengers-age-of-ultron.jpg', 141, '', 'tt2395427', NULL, NULL, NULL, NULL, NULL),
(10, 'Deadpool', 'Deadpool', 'Action, Adventure, Comedy', 2016, 'Tim Miller', 'Ryan Reynolds, Morena Baccarin, T.J. Miller', 'A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.', '', '', 'https://www.youtube.com/embed/ONHBaC-pfsk', '../assets/img/movies/deadpool.jpg', 108, '', 'tt1431045', NULL, NULL, NULL, NULL, NULL),
(11, 'Deadpool', 'Deadpool', 'Action, Adventure, Comedy', 2018, 'Tim Miller', 'Ryan Reynolds, Josh Brolin, Morena Baccarin', 'Foul-mouthed mutant mercenary Wade Wilson (a.k.a. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg Cable.', '2', '2', 'https://www.youtube.com/embed/20bpjtCbCz0', '../assets/img/movies/deadpool-2.jpg', 108, '', 'tt5463162', NULL, NULL, NULL, NULL, NULL),
(12, 'The Polar', 'Polárny', 'Animation, Adventure, Comedy ', 2004, 'Robert Zemeckis', 'Tom Hanks, Chris Coppola, Michael Jeter', 'On Christmas Eve, a young boy embarks on a magical adventure to the North Pole on the Polar Express, while learning about friendship, bravery, and the spirit of Christmas.', 'Express', 'Express', 'https://www.youtube.com/embed/TQhRqtt-Fpo', '../assets/img/movies/polar-express.jpg', 100, '', 'tt0338348', NULL, NULL, NULL, NULL, NULL),
(13, '21', '21', 'Action, Comedy, Crime', 2012, 'Phil Lord, Christopher Miller', 'Jonah Hill, Channing Tatum, Ice Cube', 'A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.', 'Jump Street', 'Jump Street', 'https://www.youtube.com/embed/RLoKtb4c4W0', '../assets/img/movies/21-jump-street.jpg', 109, '', 'tt1232829', NULL, NULL, NULL, NULL, NULL),
(14, '22', '22', 'Action, Comedy, Crime', 2014, 'Phil Lord, Christopher Miller', 'Channing Tatum, Jonah Hill, Ice Cube', 'After making their way through high school (twice), big changes are in store for officers Schmidt and Jenko when they go deep undercover at a local college.', 'Jump Street', 'Jump Street', 'https://www.youtube.com/embed/qP755JkDxyM', '../assets/img/movies/22-jump-street.jpg', 112, '', 'tt2294449', NULL, NULL, NULL, NULL, NULL),
(15, 'Forrest', 'Forrest', 'Drama, Romance', 2014, 'Robert Zemeckis', 'Tom Hanks, Robin Wright, Gary Sinise', 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.', 'Gump', 'Gump', 'https://www.youtube.com/embed/bLvqoHBptjg', '../assets/img/movies/forrest-gump.jpg', 142, '', 'tt0109830', NULL, NULL, NULL, NULL, NULL),
(16, 'Maleficent', 'Vládkyňa', 'Action, Adventure, Sci-Fi', 2014, 'Robert Stromberg', 'Angelina Jolie, Elle Fanning, Sharlto Copley', 'A vengeful fairy is driven to curse an infant princess, only to discover that the child may be the one person who can restore peace to their troubled land.', '', 'Zla', 'https://www.youtube.com/embed/n0OFH4xpPr4', '../assets/img/movies/maleficent-2014.jpg', 97, '', 'tt1587310', NULL, NULL, NULL, NULL, NULL),
(17, 'Spider-Man:', 'Spider-Man:', 'Action, Adventure, Animation', 2018, 'Bob Persichetti, Peter Ramsey', 'Shameik Moore, Jake Johnson, Hailee Steinfeld', 'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.', 'Into the Spider-Verse', 'Paralelné svety', 'https://www.youtube.com/embed/tg52up16eq0', '../assets/img/movies/spider-man-into-the-spider-verse-2017.jpg', 117, '', 'tt4633694', NULL, NULL, NULL, NULL, NULL),
(18, 'Spider-Man:', 'Spider-Man:', 'Action, Adventure, Sci-Fi', 2019, 'Jon Watts', 'Tom Holland, Samuel L. Jackson, Jake Gyllenhaal', 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.', 'Far from Home', 'Ďaleko od domova', 'https://www.youtube.com/embed/Nt9L1jCKGnE', '../assets/img/movies/spider-man-far-from-home-2019.jpg', 129, '', 'tt6320628', NULL, NULL, NULL, NULL, NULL),
(21, 'Spider-Man:', 'Spider-Man:', 'Action, Adventure, Sci-Fi', 2017, 'Jon Watts', 'Tom Holland, Michael Keaton, Robert Downey Jr.', 'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.', 'Homecoming', 'Návrat Domov', 'https://www.youtube.com/embed/n9DwoQ7HWvI', '../assets/img/movies/spider-man-homecoming-2017.jpg', 133, '', 'tt2250912', NULL, NULL, NULL, NULL, NULL),
(22, 'Batman', 'Batman', 'Action, Adventure,', 2005, 'Christopher Nolan', 'Christian Bale, Michael Caine, Ken Watanabe', 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.', 'Begins', 'Začína', 'https://www.youtube.com/embed/neY2xVmOfUM', '../assets/img/movies/batman-begins-2005.jpg', 140, '', 'tt0372784', NULL, NULL, NULL, NULL, NULL),
(23, 'Batman', 'Batman', 'Action, Crime, Drama', 2008, 'Christopher Nolan', 'Christian Bale, Heath Ledger, Aaron Eckhart', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 'The Dark Knight', 'Temný Rytier', 'https://www.youtube.com/embed/EXeTwQWrcwY', '../assets/img/movies/batman-the-dark-knight-2008.jpg', 152, '', 'tt0468569', NULL, NULL, NULL, NULL, NULL),
(24, 'Batman', 'Batman', 'Action, Crime, Drama', 2012, 'Christopher Nolan', 'Christian Bale, Tom Hardy, Anne Hathaway', 'Eight years after the Joker\'s reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.', 'The Dark Knight Rises', 'Návrat temného rytiera', 'https://www.youtube.com/embed/GokKUqLcvD8', '../assets/img/movies/batman-the-dark-knight-rises-2012.jpg', 164, '', 'tt1345836', NULL, NULL, NULL, NULL, NULL),
(25, 'The', 'Krstný', 'Crime, Drama', 1972, 'Francis Ford Coppola', 'Marlon Brando, Al Pacino, James Caan', 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'Godfather', 'Otec', 'https://www.youtube.com/embed/sY1S34973zA', '../assets/img/movies/the-godfather-1972.jpg', 175, '', 'tt0068646', NULL, NULL, NULL, NULL, NULL),
(26, 'The', 'Krstný', 'Crime, Drama', 1974, 'Francis Ford Coppola', 'Al Pacino, Robert De Niro, Robert Duvall', 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.', 'Godfather II', 'Otec II', 'https://www.youtube.com/embed/9O1Iy9od7-A', '../assets/img/movies/the-godfather-1974.jpg', 202, '', 'tt0071562', NULL, NULL, NULL, NULL, NULL),
(27, 'Schindler\'s', 'Šindlerov', 'Biography, Drama, History', 1993, 'Steven Spielberg', ' Liam Neeson, Ralph Fiennes, Ben Kingsley', 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', 'List', 'Zoznam', 'https://www.youtube.com/embed/gG22XNhtnoY', '../assets/img/movies/schindlers-list-1993.jpg', 195, '', 'tt0108052', NULL, NULL, NULL, NULL, NULL),
(28, 'Fight', 'Klub', 'Drama', 1999, 'David Fincher', ' Brad Pitt, Edward Norton, Meat Loaf', 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.', 'Club', 'Bitkárov', 'https://www.youtube.com/embed/qtRKdVHc-cE', '../assets/img/movies/fight-club-1999.jpg', 135, '', 'tt0137523', NULL, NULL, NULL, NULL, NULL),
(29, 'Inception', 'Počiatok', 'Action, Adventure, Sci-Fi', 2010, 'Christopher Nolan', 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page', 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', '', '', 'https://www.youtube.com/embed/YoHD9XEInc0', '../assets/img/movies/inception-2010.jpg', 148, '', 'tt1375666', NULL, NULL, NULL, NULL, NULL),
(30, 'The Green', 'Zelená', 'Crime, Drama, Fantasy ', 1999, 'Frank Darabont', ' Tom Hanks, Michael Clarke Duncan, David Morse', 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.', 'Mile', 'Míľa', 'https://www.youtube.com/embed/Ki4haFrqSrw', '../assets/img/movies/green-mile-1999.jpg', 189, '', 'tt0120689', NULL, NULL, NULL, NULL, NULL),
(31, 'Intouchables', 'Nedotknuteľní', 'Biography, Comedy, Drama', 2011, ' Olivier Nakache, Éric Toledano', '  François Cluzet, Omar Sy, Anne Le Ny', 'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.', '', '', 'https://www.youtube.com/embed/34WIbmXkewU', '../assets/img/movies/intouchables-2011.jpg', 112, '', 'tt1675434', NULL, NULL, NULL, NULL, NULL),
(32, 'The', 'Diktátor', 'Comedy', 2012, 'Larry Charles', 'Sacha Baron Cohen, Anna Faris, John C. Reilly', 'The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed.', 'Dictator', '', 'https://www.youtube.com/embed/cYplvwBvGA4', '../assets/img/movies/the-dictator-2012.jpg', 83, '', 'tt1645170', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_MODERATOR'),
(3, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Table structure for table `tvseries`
--

CREATE TABLE `tvseries` (
  `serialID` int(5) NOT NULL,
  `titleEN` varchar(200) NOT NULL,
  `titleSK` varchar(200) NOT NULL,
  `year` int(4) NOT NULL,
  `director` varchar(200) NOT NULL,
  `actors` text NOT NULL,
  `description` text NOT NULL,
  `genre` varchar(200) NOT NULL,
  `secondTitleEN` varchar(200) NOT NULL,
  `secondTitleSK` varchar(200) NOT NULL,
  `src` varchar(200) NOT NULL,
  `srcImg` varchar(200) NOT NULL,
  `dataTitle` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tvseries`
--

INSERT INTO `tvseries` (`serialID`, `titleEN`, `titleSK`, `year`, `director`, `actors`, `description`, `genre`, `secondTitleEN`, `secondTitleSK`, `src`, `srcImg`, `dataTitle`) VALUES
(1, 'Vikingsas', 'Vikingovia', 2013, 'Michael Hirst', 'Gustaf Skarsgård, Katheryn Winnick, Alexander Ludwig', 'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.', 'Action, Adventure, Drama', ' ', ' ', 'https://www.youtube.com/embed/1j2sXLbzm9U', '../assets/img/tvseries/vikings-2013.jpg', 'tt2306299'),
(2, 'Game', 'Hra', 2011, 'David Benioff, D.B. Weiss', 'Emilia Clarke, Peter Dinklage, Kit Harington', 'Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.', 'Action, Adventure, Drama', 'of Thrones', 'o tróny', 'https://www.youtube.com/embed/gcTkNV5Vg1E', '../assets/img/tvseries/got-2011.jpg', 'tt0944947'),
(3, 'Two and ', 'Dva a ', 2003, 'Lee Aronsohn, Chuck Lorre', 'Jon Cryer, Ashton Kutcher, Angus T. Jones', 'A hedonistic jingle writer\'s free-wheeling life comes to an abrupt halt when his brother and 10-year-old nephew move into his beach-front house.', 'Comedy, Romance', 'a Half Men', 'pol chlapa', 'https://www.youtube.com/embed/aZ3poVZuTzs', '../assets/img/tvseries/tahm.jpg', 'tt0369179'),
(4, 'The ', 'Simpsonovci', 1989, 'James L. Brooks, Matt Groening, Sam Simon', 'Dan Castellaneta, Nancy Cartwright, Harry Shearer', 'The satiric adventures of a working-class family in the misfit city of Springfield.', 'Animation, Comedy', 'Simpsons', '', 'https://www.youtube.com/embed/zJ_5v3IwWMU', '../assets/img/tvseries/simpsons.jpg', 'tt0096697'),
(5, 'Sex', 'Sexuálna', 2019, 'Laurie Nunn', 'Simone Ashley, Asa Butterfield, Gillian Anderson', 'A teenage boy with a sex therapist mother teams up with a high school classmate to set up an underground sex therapy clinic at school.', 'Comedy, Drama', 'Education', 'Výchova', 'https://www.youtube.com/embed/Hd2ldTR-WpI', '../assets/img/tvseries/sex-edu.jpg', 'tt7767422'),
(6, 'Breaking', 'Perníkový', 2008, ' Vince Gilligan', ' Bryan Cranston, Aaron Paul, Anna Gunn', 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.', 'Crime, Drama, Thriller', 'Bad', 'Tatko', 'https://www.youtube.com/embed/HhesaQXLuRY', '../assets/img/tvseries/breaking-bad-2008.jpg', 'tt0903747'),
(7, 'Rick and', 'Rick a', 2013, 'Dan Harmon, Justin Roiland', '  Justin Roiland, Chris Parnell, Spencer Grammer', 'An animated series that follows the exploits of a super scientist and his not-so-bright grandson.', 'Animation, Adventure, Comedy ', 'Morty', 'Morty', 'https://www.youtube.com/embed/_uUcMwsR5hg', '../assets/img/tvseries/rick-and-morty-2013.jpg', 'tt2861424'),
(8, 'Black', 'Čierne', 2011, 'Charlie Brooker', ' Daniel Lapaine, Hannah John-Kamen, Michaela Coel', 'An anthology series exploring a twisted, high-tech multiverse where humanity\'s greatest innovations and darkest instincts collide.', 'Drama, Sci-Fi, Thriller', 'Mirror', 'Zrkadlo', 'https://www.youtube.com/embed/V0XOApF5nLU', '../assets/img/tvseries/black-mirror-2011.jpg', 'tt2085059'),
(9, 'Stranger', 'Stranger', 2016, 'Matt Duffer, Ross Duffer', 'Millie Bobby Brown, Finn Wolfhard, Winona Ryder', 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying supernatural forces in order to get him back.', 'Drama, Fantasy, Horror ', 'Things', 'Things', 'https://www.youtube.com/embed/mnd7sFt5c3A', '../assets/img/tvseries/stranger-things-2016.jpg', 'tt4574334'),
(10, 'Narcos', 'Narcos', 2015, 'Carlo Bernard, Chris Brancato, Doug Miro', 'Pedro Pascal, Wagner Moura, Boyd Holbrook', 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.', 'Biography, Crime, Drama', '', '', 'https://www.youtube.com/embed/xl8zdCY-abw', '../assets/img/tvseries/narcos-2015.jpg', 'tt2707408'),
(11, 'Peaky', 'Peaky', 2013, 'Steven Knight', 'Cillian Murphy, Paul Anderson, Helen McCrory', 'A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.', 'Crime, Drama', 'Blinders', 'Blinders', 'https://www.youtube.com/embed/oVzVdvGIC7U', '../assets/img/tvseries/peaky-blinders-2013.jpg', 'tt2442560'),
(12, 'South', 'South', 1997, 'Trey Parker, Matt Stone, Brian Graden', ' Trey Parker, Matt Stone, Isaac Hayes', 'Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.', 'Animation, Comedy', 'Park', 'Park', 'https://www.youtube.com/embed/qnLZRAQo5jU', '../assets/img/tvseries/south-park-1997.jpg', 'tt0121955'),
(13, 'Adventure', 'Adventure', 2010, 'Pendleton Ward', 'John DiMaggio, Jeremy Shada, Tom Kenny', 'A 12-year-old boy and his best friend, wise 28-year-old dog with magical powers, go on a series of surreal adventures with each other.', 'Animation, Short, Action', 'Time', 'Time', 'https://www.youtube.com/embed/uNNt5K32kHw', '../assets/img/tvseries/adventure-time-2010.jpg', 'tt1305826'),
(14, 'Mr.', 'Mr.', 1990, 'Rowan Atkinson, Richard Curtis', ' Rowan Atkinson, Robin Driscoll, Matilda Ziegler', 'Bumbling, childlike Mr. Bean has trouble completing the simplest of tasks in day-to-day life, but his perseverance and resourcefulness frequently allow him to find ingenious ways around problems.', 'Comedy, Family ', 'Bean', 'Bean', 'https://www.youtube.com/embed/7Im2I6STbms', '../assets/img/tvseries/mr-bean-1990.jpg', 'tt0096657'),
(15, 'Mr.', 'Mr.', 2015, 'Sam Esmail', 'Rami Malek, Christian Slater, Carly Chaikin', 'Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.', 'Crime, Drama, Thriller', 'Robot', 'Robot', 'https://www.youtube.com/embed/xIBiJ_SzJTA', '../assets/img/tvseries/mr-robot-2015.jpg', 'tt4158110'),
(16, 'His Dark', 'Temné', 2019, 'Jamie Childs', ' Dafne Keen, Kit Connor, Archie Barnes', 'Two children embark on a magical adventure through parallel universes.', ' Adventure, Drama, Family', 'Materials', 'Hmoty', 'https://www.youtube.com/embed/APduGe1eLVI', '../assets/img/tvseries/his-dark-materials-2019.jpg', 'tt5607976'),
(17, 'The', 'The', 2016, 'Peter Morgan', ' Claire Foy, Olivia Colman, Matt Smith', 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.', 'Drama, History', 'Crown', 'Crown', 'https://www.youtube.com/embed/JWtnJjn6ng0', '../assets/img/tvseries/the-crown-2016.jpg', 'tt4786824'),
(18, 'Watchmen', 'Strážcovia', 2019, 'Damon Lindelof', 'Regina King, Tim Blake Nelson, Yahya Abdul-Mateen II', 'Set in an alternate history where masked vigilantes are treated as outlaws, Watchmen embraces the nostalgia of the original groundbreaking graphic novel of the same name, while attempting to break new ground of its own.', 'Action, Drama, Mystery', '', '', 'https://www.youtube.com/embed/7RhBjI9dPe4', '../assets/img/tvseries/watchmen-2019.jpg', 'tt7049682'),
(19, 'The', 'Živí', 2010, 'Frank Darabont, Angela Kang', ' Andrew Lincoln, Norman Reedus, Melissa McBride', 'Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins, and must lead a group of survivors to stay alive.', 'Drama, Horror, Thriller', 'Walking Dead', 'Mŕtvi', 'https://www.youtube.com/embed/sfAc2U20uyg', '../assets/img/tvseries/the-walking-dead-2010.jpg', 'tt1520211'),
(20, 'See', 'See', 2019, 'Steven Knight', 'Jason Momoa, Sylvia Hoeks, Hera Hilmar', 'Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive. All of that is challenged when a set of twins is born with sight.', 'Action, Drama, Sci-Fi', '', '', 'https://www.youtube.com/embed/mwXK06A2sYM', '../assets/img/tvseries/see-2019.jpg', 'tt7949218'),
(21, 'American', 'American', 2011, 'Brad Falchuk, Ryan Murphy', 'Lady Gaga, Kathy Bates, Angela Bassett', 'An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show circus, a haunted hotel, a possessed farmhouse, a cult, the apocalypse, and a slasher summer camp.', 'Drama, Horror, Thriller', 'Horror Story', 'Horror Story', 'https://www.youtube.com/embed/-9KZr2Vn7CQ', '../assets/img/tvseries/american-horror-story-2010.jpg', 'tt1844624'),
(22, 'The End of', 'Koniec', 2017, 'Jonathan Entwistle', 'Jessica Barden, Alex Lawther, Steve Oram', 'James is 17 and is pretty sure he is a psychopath. Alyssa, also 17, is the cool and moody new girl at school. The pair make a connection and she persuades him to embark on a road trip in search of her real father.', 'Adventure, Comedy, Crime', 'of the F***ing World', 'S***veného Sveta', 'https://www.youtube.com/embed/I0B6a38unHg', '../assets/img/tvseries/the-end-of-the-fucking-world-2017.jpg', 'tt6257970'),
(37, 'The', 'Blesk', 2014, 'Greg Berlanti, Geoff Johns, Andrew Kreisberg', 'Grant Gustin, Candice Patton, Danielle Panabaker', 'After being struck by lightning, Barry Allen wakes up from his coma to discover he\'s been given the power of super speed, becoming the Flash, fighting crime in Central City.', 'Action, Adventure, Drama', 'Flash', '', 'https://www.youtube.com/embed/Yj0l7iGKh8g', '../assets/img/tvseries/the-flash-2014.jpg', 'tt3107288'),
(38, 'The', 'Zaklínač', 2019, 'Lauren Schmidt', 'Henry Cavill, Freya Allan, Joey Batey', 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.', 'Action, Adventure, Drama', 'Witcher', '', 'https://www.youtube.com/embed/ndl1W4ltcmg', '../assets/img/tvseries/the-witcher-2019.jpg', 'tt5180504'),
(39, 'Riverdale', 'Riverdale', 2017, 'Roberto Aguirre-Sacasa', 'K.J. Apa, Lili Reinhart, Camila Mendes', 'While navigating the troubled waters of romance, school and family, Archie and his gang become entangled in dark Riverdale mysteries.', 'Crime, Drama, Mystery', '', '', 'https://www.youtube.com/embed/HxtLlByaYTc', '../assets/img/tvseries/riverdale-2017.jpg', 'tt5420376'),
(40, 'Lucifer', 'Lucifer', 2015, 'Tom Kapinos', 'Tom Ellis, Lauren German, Kevin Alejandro', 'Lucifer Morningstar has decided he\'s had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.', 'Crime, Drama, Fantasy', '', '', 'https://www.youtube.com/embed/X4bF_quwNtw', '../assets/img/tvseries/lucifer-2015.jpg', 'tt4052886'),
(41, 'La Casa', 'La Casa', 2017, 'Álex Pina', 'Úrsula Corberó, Itziar Ituño, Álvaro Morte', 'A group of unique robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.', 'Action, Crime, Mystery', 'de Papel', 'de Papel', 'https://www.youtube.com/embed/hMANIarjT50', '../assets/img/tvseries/la-casa-de-papel-2015.jpg', 'tt6468322'),
(42, 'Daybreak', 'Daybreak', 2019, 'Aron Eli Coleite', 'Colin Ford, Alyvia Alyn Lind, Sophie Simnett', 'High school outcast Josh is searching for his missing girlfriend in post apocalyptic Glendale. He\'s joined by a group of misfits Angelica and his former bully Wesley. On the way they\'ll face many weird things.', 'Action, Adventure, Comedy', '', '', 'https://www.youtube.com/embed/2P9U41e75tE', '../assets/img/tvseries/daybreak-2019.jpg', 'tt8755226'),
(43, 'Brooklyn', 'Brooklyn', 2013, 'Daniel J. Goor', 'Andy Samberg, Stephanie Beatriz, Terry Crews', 'Jake Peralta, an immature, but talented N.Y.P.D. detective in Brooklyn\'s 99th Precinct, comes into immediate conflict with his new commanding officer, the serious and stern Captain Ray Holt.', 'Comedy, Crime', 'Nine-Nine', 'Nine-Nine', 'https://www.youtube.com/embed/sEOuJ4z5aTc', '../assets/img/tvseries/brooklyn-nine-nine-2013.jpg', 'tt2467372'),
(44, 'BoJack', 'BoJack', 2014, 'Raphael Bob-Waksberg', 'Will Arnett, Amy Sedaris, Alison Brie', 'BoJack Horseman was the star of the hit television show \"Horsin\' Around\" in the \'80s and \'90s, now he\'s washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.', 'Animation, Comedy, Drama ', 'Horseman', 'Horseman', 'https://www.youtube.com/embed/i1eJMig5Ik4', '../assets/img/tvseries/bojack-horseman-2014.jpg', 'tt3398228'),
(45, 'Euphoria', 'Eufória', 2019, 'Sam Levinson', 'Zendaya, Maude Apatow, Angus Cloud', 'A look at life for a group of high school students as they grapple with issues of drugs, sex, and violence.', 'Drama ', '', '', 'https://www.youtube.com/embed/UR4Pxgnm-GA', '../assets/img/tvseries/euphoria-2019.jpg', 'tt8772296');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'admin', 'admin@admin.sk', '$2a$10$6XNmZjXh62pGEl2dgtmU9.d45zLNBVAu/of1YOjtuOVVsWLGijBUa'),
(2, 'user', 'user@user.sk', '$2a$10$TBoeLj5Wa4lLoePWvKmYXuqKIkgnYpLGLEgdXEJt6sZraKBvOCXa2');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 1),
(2, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`commentID`),
  ADD KEY `movieID` (`movieID`),
  ADD KEY `serialID` (`serialID`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`movieID`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tvseries`
--
ALTER TABLE `tvseries`
  ADD PRIMARY KEY (`serialID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD KEY `role_id` (`role_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `commentID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `movieID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `tvseries`
--
ALTER TABLE `tvseries`
  MODIFY `serialID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `user_roles_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
