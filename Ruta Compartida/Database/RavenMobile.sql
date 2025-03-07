CREATE DATABASE RavenMobile;
USE RavenMobile;

-- Tabla USUARIO
CREATE TABLE USUARIO (
    num INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    primApellido VARCHAR(50) NOT NULL,
    segApellido VARCHAR(50),RavenMobile
    correo VARCHAR(100) NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    num_cel VARCHAR(15) NOT NULL
);

-- Tabla CHOFER
CREATE TABLE CHOFER (
    codigo VARCHAR(50) PRIMARY KEY,
    numUsuario INT NOT NULL,
    codigo_licencia VARCHAR(50) NOT NULL,
    FOREIGN KEY (numUsuario) REFERENCES USUARIO(num)
);

-- Tabla VEHICULO
CREATE TABLE VEHICULO (
    codigo VARCHAR(50) PRIMARY KEY,
    codigoChofer VARCHAR(50) NOT NULL,
    color VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    FOREIGN KEY (codigoChofer) REFERENCES CHOFER(codigo)
);

-- Tabla RUTA
CREATE TABLE RUTA (
    codigo VARCHAR(50) PRIMARY KEY,
    num_ruta VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255),
    espacio_disponible INT NOT NULL
);

-- Tabla HORARIO
CREATE TABLE HORARIO (
    num INT AUTO_INCREMENT PRIMARY KEY,
    codigoRuta VARCHAR(50) NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    FOREIGN KEY (codigoRuta) REFERENCES RUTA(codigo)
);

-- Tabla PUNTO
CREATE TABLE PUNTO (
    num INT AUTO_INCREMENT PRIMARY KEY,
    codigoRuta VARCHAR(50) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    FOREIGN KEY (codigoRuta) REFERENCES RUTA(codigo)
);

-- Tabla CALIFICACION
CREATE TABLE CALIFICACION (
    num INT AUTO_INCREMENT PRIMARY KEY,
    numUsuario INT NOT NULL,
    codigoChofer VARCHAR(50) NOT NULL,
    puntuacion INT NOT NULL,
    comentario TEXT,
    FOREIGN KEY (numUsuario) REFERENCES USUARIO(num),
    FOREIGN KEY (codigoChofer) REFERENCES CHOFER(codigo)
);

-- Tabla PASAJERO
CREATE TABLE PASAJERO (
    num INT AUTO_INCREMENT PRIMARY KEY,
    numUsuario INT NOT NULL,
    FOREIGN KEY (numUsuario) REFERENCES USUARIO(num)
);

-- Tabla SOLICITUD
CREATE TABLE SOLICITUD (
    num INT AUTO_INCREMENT PRIMARY KEY,
    numPasajero INT NOT NULL,
    codigoRuta VARCHAR(50) NOT NULL,
    fecha_solicitud DATETIME NOT NULL,
    FOREIGN KEY (numPasajero) REFERENCES PASAJERO(num),
    FOREIGN KEY (codigoRuta) REFERENCES RUTA(codigo)
);