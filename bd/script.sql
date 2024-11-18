CREATE DATABASE CampHalfBlood;

USE CampHalfBlood;

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45),
confirmacao VARCHAR(45),
personagem INT);

CREATE TABLE quizz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(45)
);
