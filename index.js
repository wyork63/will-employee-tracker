const mysql = require("mysql2");
const table = require("console.table");
const inquirer = require ("inquirer")

const db = mysql.createConnection({
    host: 'localhost',
    port: '3001',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: "list",
            name: "what",
            message: "What would you like to do? (select one)",
            choices: [
                "View all departmenrs",
                "View all roles",
                "View all employees",
                "View all employees by manager",
                "Add a department",
                "Add an employee",
                "Update an empoyee role",
            ],
        },
    ])
}


// promptUser()
