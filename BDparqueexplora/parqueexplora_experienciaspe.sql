-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: parqueexplora
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `experienciaspe`
--

DROP TABLE IF EXISTS `experienciaspe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experienciaspe` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `titulo` tinytext NOT NULL,
  `descripcion` mediumtext NOT NULL,
  `sala` mediumtext NOT NULL,
  `imagenRe` tinytext NOT NULL,
  `imagen` tinytext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experienciaspe`
--

LOCK TABLES `experienciaspe` WRITE;
/*!40000 ALTER TABLE `experienciaspe` DISABLE KEYS */;
INSERT INTO `experienciaspe` VALUES (1,'Experiencias viajeras de ciencia','Llegamos hasta tu comunidad con el Exploramóvil, un camión expositor para aprender y crear','Exploramovil','1','exploraMovil.jpg'),(2,'Fisica bajo el cielo','Levantar un gran peso con ayuda de una palanca gigante, experimentar el efecto Coriolis al girar a gran velocidad, escalar y pedalear son algunas de las actividades que este espacio ofrece, para permitir a los visitantes apropiarse de los fenómenos físicos y vincularlos a su cotidianidad.','Sala abierta','2','salaAbiertaFisica.jpg'),(3,'Un imperio sin tiempo','Los dinosaurios dominaron el planeta durante 135 millones de años. El misterio que los rodea ha dado origen a numerosas historias, y la ciencia ha invertido muchos esfuerzos para descifrar su origen, su comportamiento y su desaparición.','Sala abierta','3','salaAbiertaDinosaurios.png'),(4,'Primera infancia en Parque Explora','La Sala Infantil es un espacio pensado especialmente para niños de hasta cinco años (menos de 1,10 metro de altura), con ambientes para que los pequeños puedan ser constructores, artistas, exploradores, científicos y escaladores, y actividades que estimulan sus habilidades motrices y cognitivas.','Sala infantil','3','salaInfaltil.png'),(5,'Cuerpo, relaciones vitales','La exhibición Cuerpo, relaciones vitales es el resultado de un ejercicio de itinerancia formulado a partir de Conexión de la vida, una sala permanente de Parque Explora que durante la renovación fue reemplazada por la sala Mente, el mundo adentro.','Sala permanente','4','salaPermanente.png'),(6,'Tiempo, mas alla del reloj','Nos permite comprender esta magnitud física como una temática transversal a muchas áreas, y continuar nuestra búsqueda de integración del conocimiento científico –natural y humano– para presentarlo no como un cuerpo cargado de abstracciones, sino como un elemento intrínseco a la vida humana, cercano y susceptible a la experimentación.','Sala tiempo','4','salaTiempo.png');
/*!40000 ALTER TABLE `experienciaspe` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-13  0:24:09
