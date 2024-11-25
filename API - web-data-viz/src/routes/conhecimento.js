var express = require("express");
var router = express.Router();

var conhecimentoController = require("../controllers/conhecimentoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    conhecimentoController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    conhecimentoController.autenticar(req, res);
});

router.get("/obteracertos/:IDUSUARIO", function (req, res) {
    conhecimentoController.obteracertos(req, res);
});

router.get("/obteranking/:IDUSUARIO", function (req, res) {
    conhecimentoController.obteranking(req, res);
});
module.exports = router;