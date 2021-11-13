USE employee_tracker_db;

-- insert data into department table -- 
INSERT INTO department (name)
VALUE 
('Sales'), ('Engineering'), ('Finance'), ('Legal');

-- insert data into role table --
INSERT INTO role (title, salary, department_id)
VALUE
('Sales Lead', 100000, 1),
('Salesperson', 75000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 100000, 2),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 180000, 4);

-- insert data into employee table -- 
INSERT INTO employee (f_name, l_name, manager_id, role_id)
VALUE
('Hulk', 'Hogan', null, 1),
('Steve', 'Carell', null, 2),
('Peter', 'Parker', null, 3),
('Michael', 'Jordan', null, 4),
('Bruce', 'Wayne', null, 5),
('Optimus', 'Prime', null, 6),
('Chuck', 'Norris', null, 7);

