var personalidadeModel = require("../models/personalidadeModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        
                            res.json({
                                id: resultadoAutenticar[0].idUsuario,
                                email: resultadoAutenticar[0].email,
                                nome: resultadoAutenticar[0].nome,
                                senha: resultadoAutenticar[0].senha,
                                confirmacao: resultadoAutenticar[0].confirmacao,
                                personagem: resultadoAutenticar[0].personagem
                            });

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var chaleMaisPontuado = req.body.chaleServer;
    var personagemMaisPontuado = req.body.personagemMaisPontuadoServer;
    var ID_USUARIO = req.body.idUsuarioServer;


    // Faça as validações dos valores
    if (personagemMaisPontuado == undefined) {
        res.status(400).send("Seu personagem está undefined!");
    } else if (chaleMaisPontuado == undefined) {
        res.status(400).send("Seu chale está undefined!");
    }  else {

        // Passe os valores como parâmetro e vá para o arquivo personalidadeModel.js
        personalidadeModel.cadastrar(chaleMaisPontuado, personagemMaisPontuado, ID_USUARIO)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function tracosPersonalidade(req, res) {
    var ID_USUARIO = req.params.IDUSUARIO;
    console.log(`Recebendo ID_USUARIO: ${ID_USUARIO} para traços de personalidade`);

    personalidadeModel.tracosPersonalidade(ID_USUARIO).then(function(result) {
        if (result.length > 0) {
            res.status(200).json(result[0].personagem); // Envia apenas o 'personagem' para o frontend
        } else {
            res.status(404).json({ mensagem: "Nenhum dado encontrado" });
        }
    }).catch(function(error) {
        res.status(500).json({ mensagem: "Erro ao consultar a base de dados", erro: error });
    });
}

    


module.exports = {
    autenticar,
    cadastrar,
    tracosPersonalidade
}