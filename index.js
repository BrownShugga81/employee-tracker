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
    ]).then(answer => {
        if(answer.menuChoice === 'View all departments'){
            let sqlQuery = `
            SELECT *
            FROM dog`

            connection.query(sqlQuery, (err, data) => {
                if(err) throw err;
                console.table(data);
                console.log('\n');
                beginQuestions()
            });
        }
    })
}