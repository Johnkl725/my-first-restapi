CREATE DATABASE companydb;

USE companydb;
CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
)
INSERT INTO employee (name,salary) VALUES 
('John', 5000),
('Paul', 6000),
('Ringo', 7000),
('George', 8000);