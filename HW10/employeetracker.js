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
    addEmployee();
});


//Add an Employee
function addEmployee() {
    console.log("Adding a new employee...\n");
    const query = connection.query(
        "INSERT INTO employee SET ?",
        {
            first_name: " ",
            last_name: " ",
            role: " "
            manager: " "
        },
        (err, res) => {
            if (err) throw err;
            console.log(res.affectedRows + " employee added!\n");
            //CALL UPDATE EMPLOYEE AFFFFFFTERRRR THE INSERT COMPLETES!!!
            updateEmployee();
        }
    );
    console.log(query.sql);
};

//Update Employee
function updateEmployee() {
    console.log("Updating department where id =...");
    var query = connection.query(
        "UPDATE employee SET ? WHERE ?",
        [
            {
                department: "updated department name"
            },
            {
                id: "employee id"
            }
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " employee updated!\n");
            //Call deleteEmployee AFTER the UPDATE completes!
            deleteEmployee();
        }
    );

    //logs the actual query being run
    console.log(query.sql);
};

//Delete Employee
function deleteEmployee() {
    console.log("Deleting employee...");
    var query = connection.query(
        "DELETE FROM employee WHERE ?",
        {
            id: 1,
            first_name: " ",
            last_name: " "
        },
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " employee deleted!\n");
            //Call viewEmployees AFTER the DELETE completes!
            viewEmployees();
        }
    );

    //logs the actual query being run
    console.log(query.sql);
};

//View all Employees
function viewEmployees() {
    console.log("Selecting all employees...");
    var query = connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        //log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
    //logs the actual query being run
    console.log(query.sql);
};

//View Employees by Department 
function byDepartment() {
    //prints employees based on department
    connection.query("SELECT id, first_name, last_name FROM employee WHERE department=?", (" "), function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i]).id + " | " + console.log(res[i]).first_name + " | " + console.log(res[i]).last_name + " | "
        }
        console.log("-----------------------------------");
        connection.end();
    });
};

//View Employees by Manager 
function byManager() {
    //prints employees based on Manager
    connection.query("SELECT id, first_name, last_name FROM employee WHERE manager_id=?", (" "), function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i]).id + " | " + console.log(res[i]).first_name + " | " + console.log(res[i]).last_name + " | "
        }
        console.log("-----------------------------------");
        connection.end();
    });
};