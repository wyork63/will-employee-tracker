// can put lines 1-12 in config file later 
const mysql = require("mysql2");
const table = require("console.table");
const inquirer = require ("inquirer")
require("dotenv").config()

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
});

// links db to prompt user 
db.connect(()=> {
    promptUser()
})

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: "list",
            name: "what",
            message: "What would you like to do? (select one)",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "View all employees by manager",
                "Add a department",
                "Add an employee",
                "Add role",
                "Update an empoyee role",
                "quit",
            ],
        },
// create 28-31 for all choices 
    ]) .then ((response) => {
        switch(response.what) {
            case "View all departments":
                // called at bottom of 
                viewAllDepartments()
                break;
            case "Add role":
                addRole()
                break;
            case "quit":
                db.end()
        }
    })
}


const viewAllDepartments = () => {
    db.query("SELECT * FROM department", (err, res) => {
        if (err) 
            throw err;
        console.table(res)
        promptUser();
    }
    )
}
const viewAllRoles = () => {
    db.query("SELECT * FROM department")
}

const addRole = () => {
    db.query("SELECT * FROM department", (err, res) => {
        if (err)
            throw err;

        inquirer.prompt([
            {
            type: "input",
            name: "role",
            message: "Insert the name of the new role",
            },
            {
            type: "input",
            name: "salary",
            message: "What is this role's salary",
            },
            {
            type: "list",
            name: "depID",
            message: "Please select the Department ID",
            choices:
            // takes all of the values from department and returns 
                res.map(department => department.dep_name)
            }
        ]) .then(data => {
            // returns name of the department depID.id (comes from integer created from table creation)
            const depID = res.find(department => department.dep_name === data.depID)
            db.query("INSERT INTO role_table SET ?", {
                title: data.role, salary: data.salary, department_id: depID.id
            }, 
            err => {
                if (err) 
                    throw err;
                    
            console.log("Role successfully added")
            promptUser(); 
        }
            ) 
        })
    })
}