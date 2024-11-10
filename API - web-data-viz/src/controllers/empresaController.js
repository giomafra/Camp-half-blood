var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var cnpj = req.body.cnpjServer;  // Modificação para capturar o valor
  var razaoSocial = req.body.razaoSocialServer;  // Modificação para capturar o valor

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
      if (resultado.length > 0) {
          res.status(401).json({ mensagem: `A empresa com o CNPJ ${cnpj} já existe` });
      } else {
          empresaModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
              res.status(201).json(resultado);
          });
      }
  });
}


module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
};
