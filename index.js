const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker_db',
    port: 3306
});

connection.connect(function(err) {
    if(err) throw err;
    console.log('Connected to Employee database');
    beginQuestions();
});

function beginQuestions() {
    inquirer.prompt([
        {
            type: 'list',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role' ],
            message: 'What would you like to do?',
            name: 'menuChoice'
        }
        // View Departments
    ]).then(answer => {
        if(answer.menuChoice === 'View all departments'){
            let sqlQuery = `
            SELECT *
            FROM department`

            connection.query(sqlQuery, (err, data) => {
                if(err) throw err;
                console.table(data);
                beginQuestions()
            });

         // View Roles   
        }else if(answer.menuChoice === 'View all roles'){
            let sqlQuery = `
            SELECT *
            FROM role`

            connection.query(sqlQuery, (err, data) => {
                if(err) throw err;
                console.table(data);
                beginQuestions()
            });
            
         // View Employees   
        }else if(answer.menuChoice === 'View all employees'){
            let sqlQuery = `
            SELECT *
            FROM employee`

            connection.query(sqlQuery, (err, data) => {
                if(err) throw err;
                console.table(data);
                beginQuestions()
            });

         // Add Department   
        }else if(answer.menuChoice === 'Add a department'){
            inquirer.prompt([
                {
                    name: 'addDepartment',
                    type: 'input',
                    message: 'What is the new Department name?'
                }
            ]).then(addDepartment => {
                let sqlQuery = `
                INSERT INTO department (name)
                VALUE (?)`

                connection.query(sqlQuery, addDepartment.addDepartment, (err, data) => {
                    if(err) throw err;
                    console.log('New Department added!');
                    beginQuestions();
                });
            });
          
         // Add Role   
        }else if(answer.menuChoice === 'Add a role'){
            inquirer.prompt([
                {
                    name: 'addRole',
                    type: 'input',
                    message: 'What is the new Role?'
                },
                {
                    name: 'roleSalary',
                    type: 'input',
                    message: "What is the new role's salary?"
                },
                {
                    name: 'roleDepartment',
                    type: 'input',
                    message: 'What Department does this role belong to?'
                }
            ]).then(addRole => {
                let sqlQuery = `
                INSERT INTO role (title, salary, department_id)
                VALUES (?,?,?)`

                connection.query(sqlQuery, [addRole.addRole, addRole.roleSalary, addRole.roleDepartment], (err, data) => {
                    if(err) throw err;
                    console.log('New role added!');
                    beginQuestions();
                });
            });
        }        
    })
}