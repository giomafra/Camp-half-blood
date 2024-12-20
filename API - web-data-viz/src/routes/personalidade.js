var express = require("express");
var router = express.Router();

var personalidadeController = require("../controllers/personalidadeController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    personalidadeController.cadastrar(req, res);
})
router.post("/cadastrar", function (req, res) {
    personalidadeController.cadastrar(req, res);
})

router.get("/tracosPersonalidade/:IDUSUARIO", function (req, res){
    personalidadeController.tracosPersonalidade(req, res)
});
module.exports = router;