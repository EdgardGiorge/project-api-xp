DROP SCHEMA IF EXISTS XP;
CREATE SCHEMA XP;

USE XP;
CREATE TABLE `Cliente`(
    `codCliente` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `cliente` CHAR(255) NOT NULL UNIQUE,
    `saldo` DECIMAL(8, 2) NOT NULL
);
CREATE TABLE `Ativo`(
    `codAtivo` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `ativo` CHAR(255) NOT NULL UNIQUE,
    `qtdeAtivo` INT NOT NULL,
    `valorAtivo` DECIMAL(8, 2) NOT NULL,
    `data` DATETIME DEFAULT NOW()   
);
CREATE TABLE `Ativo_Cliente`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `codCliente` INT NOT NULL,
    `codAtivo` INT NOT NULL,
    `qtdeAtivo` INT NOT NULL,
    `valorAtivo` DECIMAL(8, 2) NOT NULL,
    CONSTRAINT FOREIGN KEY(codCliente) REFERENCES Cliente(codCliente),
    CONSTRAINT FOREIGN KEY(codAtivo) REFERENCES Ativo(codAtivo) 
);

INSERT INTO `Cliente`
(cliente, saldo)
VALUES
('Eduardo Souza', 1520.80),
('Evelise Souza', 500.30),
('Jacimara Santos', 2350.00),
('Dalva Eloisa', 6800),
('Meris Castanho', 12000.30);

INSERT INTO `Ativo`
(ativo, qtdeAtivo, valorAtivo)
VALUES
('GGBR4', 1000, 23.50),
('BRKM5', 20000, 34.65),
('MGLU3', 4000, 2.75),
('BBSE3', 3000, 27.48),
('USIM5', 9000, 8.38);

INSERT INTO `Ativo_Cliente`
(codCliente, codAtivo, qtdeAtivo, valorAtivo)
VALUES
(1, 3, 30, 2.75),
(2, 3, 30, 2.75),
(3, 5, 20, 8.38),
(4, 1, 20, 23.50),
(5, 4, 50, 27.48); 