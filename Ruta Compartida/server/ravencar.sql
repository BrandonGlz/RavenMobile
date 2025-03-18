-- Active: 1741018502060@@127.0.0.1@3306@ravencar
DROP DATABASE ravencar

CREATE DATABASE ravencar

USE ravencar

/* APARTADO PARA REGISTRARSE */
CREATE TABLE role(
    code VARCHAR(5) PRIMARY KEY NOT NULL,
    description VARCHAR(10) NOT NULL
);

INSERT INTO role (code, description) VALUES 
('DRIVE', 'Driver'),
('PASSE', 'Passenger');

CREATE TABLE personalData(
    num INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    secondLastName VARCHAR(30) NOT NULL,
    studentId VARCHAR(10), 
    phoneNumber VARCHAR(10), 
    role VARCHAR(5),
    FOREIGN KEY (role) REFERENCES role(code)
)

CREATE TABLE accountDetail(
    email VARCHAR(28) NOT NULL UNIQUE,
    pwd VARCHAR(60) NOT NULL,
    personalData INT NOT NULL,
    FOREIGN KEY (personalData) REFERENCES personalData(num)
)

SELECT * FROM `personalData`

SELECT * FROM `accountDetail`

/* APARTADO PARA CREAR RUTAS*/

CREATE TABLE ride(
    num INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    fromLocation VARCHAR(255) NOT NULL,
    toLocation VARCHAR(255) NOT NULL,
    rideSchedul INT,
    capacity INT NOT NULL,
    personalData INT NOT NULL,
    FOREIGN KEY (rideSchedul) REFERENCES rideSchedul(num),
    FOREIGN KEY (personalData) REFERENCES personalData(num)
)

CREATE TABLE rideSchedul(
    num INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dayOfWeek VARCHAR(10) NOT NULL,
    time TIME NOT NULL,
    personalData INT NOT NULL,
    FOREIGN KEY (personalData) REFERENCES personalData(num)
)

CREATE TABLE rideStop(
    num INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    stopFromLocation VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    ride INT,
    FOREIGN KEY (ride) REFERENCES ride(num)
)


SELECT 
    r.num AS ride_id,
    r.fromLocation AS origin,
    r.toLocation AS destination,
    rs.dayOfWeek AS day,
    rs.time AS time
FROM 
    ride r
JOIN 
    rideSchedul rs ON r.rideSchedul = rs.num
WHERE 
    r.personalData = 1;



SELECT 
    rs.num AS stop_id,
    rs.stopFromLocation AS stop_location,
    rs.description AS stop_description
FROM 
    rideStop rs
WHERE 
    rs.ride = 1;