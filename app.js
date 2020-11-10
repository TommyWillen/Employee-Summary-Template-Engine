const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


let employeeList = [];
// manager prompts

let idCheck = val => employeeList.some(employee => (employee.id === val))

const managerFunc = () => {
    inquirer.prompt([
        {

            type: "input",
            name: "name",
            message: "What is your name?",
            validate: val => (val.length < 3) ? "Name must be at least 2 or more characters" : true,
        },
        {

            type: "input",
            name: "id",
            message: "What is your employee id?",
            validate: val => (isNaN(parseInt(val))) ? "Must be a number":true,
        },
        {
            //   email, officenumber
            type: "input",
            name: "email",
            message: "What is your employee email?",
            validate: val => (val.length < 3) ? "Name must be at least 2 or more characters" : true,
        },
        {

            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
            validate: val => (isNaN(parseInt(val))) ? "Must be a number":true,
        },
        {
            type: "list",
            name: "employeeAdd",
            message: "Would you like to add another employee?",
            choices: [{ name: "Add an engineer to the list", value: "Engineer" }, { name: "Add an intern to the list", value: "Intern" }, { name: "Finished adding employees", value: "None" }]
        },
    ]).then(response => {
        // create manager obj
        let managerObj = new Manager(response.name, response.id, response.email, response.officeNumber);

        employeeList.push(managerObj);

        switch (response.employeeAdd) {
            case "Engineer": engineerFunc();
                break;
            case "Intern": internFunc();
                break;
            case "None":
                fs.writeFile(outputPath, render(employeeList), err => err ? console.log(err) : console.log("Success"));
        }
    })
}

const engineerFunc = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is their name?",
            validate: val => (val.length < 3) ? "Name must be at least 2 or more characters" : true,
        },
        {
            type: "input",
            name: "id",
            message: "What is their employee id?",
            validate: val => (!isNaN(parseInt(val)) || !idCheck(val)) ? "Id is either not a number or already in use":true,
        },
        {
            type: "input",
            name: "email",
            message: "What is their employee email?",
            validate: val => (val.length < 3) ? "Name must be at least 2 or more characters" : true,
        },
        {
            type: "input",
            name: "github",
            message: "What is their Github username?",
            validate: val => (val.length < 3) ? "Name must be at least 2 or more characters" : true,
        },
        {
            type: "list",
            name: "employeeAdd",
            message: "Would you like to add another employee?",
            choices: [{ name: "Add an engineer to the list", value: "Engineer" }, { name: "Add an intern to the list", value: "Intern" }, { name: "Finished adding employees", value: "None" }]
        },
    ]).then(response => {
        // create engineer obj
        let engineerObj = new Engineer(response.name, response.id, response.email, response.github);

        employeeList.push(engineerObj);

        switch (response.employeeAdd) {
            case "Engineer": engineerFunc();
                break;
            case "Intern": internFunc();
                break;
            case "None":
                fs.writeFile(outputPath, render(employeeList), err => err ? console.log(err) : console.log("Success"));
        }

    })
}

const internFunc = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is their name?",
            validate: val => (val.length < 3) ? "Name must be at least 2 or more characters" : true,
        },
        {
            type: "input",
            name: "id",
            message: "What is their employee id?",
            validate: val => (!isNaN(parseInt(val)) || !idCheck(val)) ? "Id is either not a number or already in use":true,
        },
        {
            type: "input",
            name: "email",
            message: "What is their employee email?",
            validate: val => (val.length < 3) ? "Name must be at least 2 or more characters" : true,
        },
        {
            type: "input",
            name: "school",
            message: "What school do they attend?",
            validate: val => (val.length < 3) ? "Name must be at least 2 or more characters" : true,
        },
        {
            type: "list",
            name: "employeeAdd",
            message: "Would you like to add another employee?",
            choices: [{ name: "Add an engineer to the list", value: "Engineer" }, { name: "Add an intern to the list", value: "Intern" }, { name: "Finished adding employees", value: "None" }]
        },
    ]).then(response => {
        // create engineer obj
        let engineerObj = new Intern(response.name, response.id, response.email, response.school);

        employeeList.push(engineerObj);

        switch (response.employeeAdd) {
            case "Engineer": engineerFunc();
                break;
            case "Intern": internFunc();
                break;
            case "None":
                fs.writeFile(outputPath, render(employeeList), err => err ? console.log(err) : console.log("Success"));
        }

    })
}

managerFunc();


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
