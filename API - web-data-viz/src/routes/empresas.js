var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

// Rota de cadastro de empresa
router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);  // Chama o controller de cadastro
});

// Rota de busca por CNPJ
router.get("/buscar", function (req, res) {
    empresaController.buscarPorCnpj(req, res);
});

// Rota de busca por ID
router.get("/buscar/:id", function (req, res) {
    empresaController.buscarPorId(req, res);
});

// Rota para listar empresas
router.get("/listar", function (req, res) {
    empresaController.listar(req, res);
});

module.exports = router;
