DROP DATABASE CampHalfBlood;
USE CampHalfBlood;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45),
confirmacao VARCHAR(45),
personagem INT);

CREATE TABLE quizz_conhecimento(
idQuiz_conhec INT PRIMARY KEY AUTO_INCREMENT,
qtdQuestoes int,
qtdAcertos INT,
qtdErros INT,
fkUsuario INT,
CONSTRAINT fkConhecUsuario FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario)
);

CREATE TABLE quizz_personalidade(
idQuiz_persona INT PRIMARY KEY AUTO_INCREMENT,
chale int,
personagem VARCHAR(45),
fkUsuario INT,
CONSTRAINT fkPersonUsuario FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario)
);
SELECT * FROM quizz_personalidade;
SELECT * FROM quizz_conhecimento;


 SELECT
        p.personagem
        FROM quizz_personalidade as p
        JOIN
        usuario 
        on
        fkUsuario = idUsuario
        WHERE fkUsuario;

   SELECT
        c.qtdAcertos,
        c.data_hora
        FROM quizz_conhecimento as c
        JOIN
        usuario
        on
        fkUsuario = idUsuario
        WHERE fkUsuario;


    SELECT 
        u.nome,
        c.qtdAcertos
        FROM
        usuario AS u
        JOIN
        quizz_conhecimento as c
        ON fkUsuario = idUsuario;
