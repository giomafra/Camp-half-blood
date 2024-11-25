CREATE DATABASE CampHalfBlood;
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
data_hora  datetime DEFAULT CURRENT_TIMESTAMP,
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
SELECT * FROM usuario;
SELECT * FROM quizz_conhecimento;

INSERT INTO usuario VALUES
(DEFAULT,'Gabriel','gabriel@gmail.com','123','123',2),
(DEFAULT,'Jose','jose@gmail.com','456','456',3);


INSERT INTO quizz_conhecimento (qtdAcertos,fkUsuario) VALUES
(5,2),
(2,2),
(7,3);
INSERT INTO quizz_conhecimento (qtdAcertos,fkUsuario) VALUES
(2,3);



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
        
	    SELECT 
        u.personagem,
        u.nome,
        SUM(c.qtdAcertos) AS 'soma'
        FROM
        usuario AS u
        JOIN
        quizz_conhecimento as c
        ON fkUsuario = idUsuario
        group by idUsuario
        ORDER BY soma DESC;

