//Require packages
const inquirer = require("inquirer");
const mysql = require("mysql");


//Create Connection Boilerplate
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Serbia07!",
    database: "employee_tracker_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //call another function or end the connection
    start();
});


function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View Employees by Department",
                "View Employees by Manager",
                "Add an Employee",
                "Delete an Employee",
                "Update an Employee",
                "exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewEmployees();
                    break;
                case "View Employees by Department":
                    byDepartment();
                    break;
                case "View Employees by Manager":
                    byManager();
                    break;
                case "Add an Employee":
                    addEmployee();
                    break;
                case "Delete an Employee":
                    deleteEmployee();
                    break;
                case "Update an Employee":
                    updateEmployee();
                    break;
                case "exit":
                    connection.end();
                    break;
            }
        });
}


//Add an Employee
function addEmployee() {
    inquirer
        .prompt([
            {
                name: 'firstname',
                type: 'input',
                message: 'Enter first name:'
            },
            {
                name: 'lastname',
                type: 'input',
                message: 'Enter last name:'
            }
        ])
        .then(answer => {
            connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: answer.firstname,
                    last_name: answer.lastname,
                },
                err => {
                    if (err) throw err;
                    console.log('employee added!');
                }
            );
            start();
})
}


//View all Employees
function viewEmployees() {
    inquirer
        .prompt({
            name: "employee",
            type: "input",
            message: "What employee would you like to search for?"
        })
        .then(function (answer) {
            var query = "SELECT * FROM employee";
            connection.query(query, { employee: answer.employee }, function (err, res) {
                if (err) throw err;
                for (var i = 0; i < res.length; i++) {
                    console.log("First Name: " + res[i].first_name + " || Last Name: " + res[i].last_name + " || Role: " + res[i].role);
                }
                start();
            });
        });
}