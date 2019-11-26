const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/Questions");

function init() {
    inquirer
        .prompt(questions)
        .then(function (input) {

            if (input.title === "Employee") {
                var object = new Employee(input.name, input.id, input.email, input.officeNumber);
                fs.appendFile('./index.html', html, function (err) {
                    if (err) throw err;
                });
            
            if (input.title === "Manager") {
                var object = new Manager(input.name, input.id, input.email, input.officeNumber);
                fs.appendFile('./index.html', html, function (err) {
                    if (err) throw err;
                });
               
            } else if (input.title === "Engineer") {
                var object = new Engineer(input.name, input.id, input.email, input.github);
                fs.appendFile('./index.html', html, function (err) {
                    if (err) throw err;
                });
                
            } else if (input.title === "Intern") {
                var object = new Intern(input.name, input.id, input.email, input.school);
                fs.appendFile('./index.html', html, function (err) {
                    if (err) throw err;
                });
            }
            if (input.repeat === 'Yes') {
                init();
            }
            return;
        }
    }    
};

function writeToFile() {
    const html = generateHTML();
    writeFileAsync("index.html", html);
};

writeToFile();

init();