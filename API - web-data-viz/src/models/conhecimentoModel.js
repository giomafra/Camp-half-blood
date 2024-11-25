var database = require("../database/config")



// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(quantidadeDeQuestoes, pontuacaoFinal, erros, ID_USUARIO) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", quantidadeDeQuestoes, pontuacaoFinal, erros, ID_USUARIO);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO quizz_conhecimento (qtdQuestoes, qtdAcertos,qtdErros, fkUsuario) VALUES (${quantidadeDeQuestoes}, '${pontuacaoFinal}', ${erros} , ${ID_USUARIO});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obteracertos(ID_USUARIO) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", ID_USUARIO);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT
        c.qtdAcertos,
        c.data_hora
        FROM quizz_conhecimento as c
        JOIN
        usuario
        on
        fkUsuario = idUsuario
        WHERE fkUsuario = ${ID_USUARIO} ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obteranking(ID_USUARIO) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", ID_USUARIO);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        SELECT 
        u.nome,
        c.qtdAcertos
        FROM
        usuario AS u
        JOIN
        quizz_conhecimento as c
        ON fkUsuario = idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    cadastrar,
    obteracertos,
    obteranking
};