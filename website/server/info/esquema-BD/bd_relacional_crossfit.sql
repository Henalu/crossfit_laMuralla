#DROP DATABASE crossfit;

CREATE DATABASE crossfit;

USE crossfit;

CREATE TABLE Modelos(
	id_modelo INT AUTO_INCREMENT,
    nombre VARCHAR(200),
    descripcion MEDIUMTEXT,
    tipo VARCHAR(100),
    PRIMARY KEY(id_modelo)
);

CREATE TABLE Articulos_Stock(
	id_articulos_stock INT AUTO_INCREMENT
);