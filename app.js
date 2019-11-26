const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML.js").generateHTML;
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function init() {
    inquirer
        .prompt(questions)
        .then(function (input) {
            // if user selects Manager then use the Manager html
            if (input.title === "Manager") {
                var object = new Manager(input.name, input.id, input.email, input.officeNumber);
                var html = managerCard(object);
                fs.appendFile('./index.html', html, function (err) {
                    if (err) throw err;
                });
                // if user selects Engineer then use the Engineer html
            } else if (input.title === "Engineer") {
                var object = new Engineer(input.name, input.id, input.email, input.github);
                var html = engineerCard(object);
                fs.appendFile('./index.html', html, function (err) {
                    if (err) throw err;
                });
                // if user selects Intern then use the Intern html
            } else if (input.title === "Intern") {
                var object = new Intern(input.name, input.id, input.email, input.school);
                var html = internCard(object);
                fs.appendFile('./index.html', html, function (err) {
                    if (err) throw err;
                });
            }
            if (input.repeat === 'Yes') {
                init();
            }
            return;
        })
};

function writeToFile() {
    const html = generateHTML();
    writeFileAsync("index.html", html);
};

writeToFile();

init();