DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE IF NOT EXISTS employee_tracker_db;

USE employee_tracker_db;

-- creating tables for department, roles, and employees --
CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary INTEGER,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    f_name VARCHAR(30),
    l_name VARCHAR(30),
    manager_id INTEGER,
    role_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);