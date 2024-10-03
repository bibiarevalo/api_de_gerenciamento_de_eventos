const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller.js');

router.post("/cadastrar", controller.cadastrarEvent);
// router.get("/listar", controller.listEvent);
// router.get("/detalhes", controller.detalhesEvent);

module.exports = router;