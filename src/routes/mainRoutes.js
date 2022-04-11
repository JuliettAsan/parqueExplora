const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");


// API PARA CRUD DE EXPERIENCIAS

router.get("/api", mainController.totalExperiencias);
router.post("/api", mainController.instertarExperiencia);
router.put("/api/:id", mainController.actualizarExperiencia);
router.delete("/api/:id", mainController.eliminarExperiencia);
router.get("/api/:id", mainController.detalleExperiencia);
router.get("/home", mainController.home);
// API PARA BUSCAR EXPERIENCIA FILTRADA POR SALA

router.get("/salas", mainController.buscarSalas);


module.exports = router;