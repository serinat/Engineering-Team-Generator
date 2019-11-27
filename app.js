let inquirer = require("inquirer")
let cheerio = require("cheerio")
let fs = require("fs");
let util = require("util");
const writeFileSync = util.promisify(fs.writeFile);
const readFileSync = util.promisify(fs.readFile);
//let Employee = require("./lib/Employee");
let Manager = require("./lib/Manager");
let Engineer = require("./lib/Engineer");
let Intern = require("./lib/Intern");
let questions = require("./lib/Questions");

let teamName;
let employeeObject = [];
let i = 0;
let person;

promptUser()

function promptUser() {
    inquirer.prompt(questions.managerQuestions).then(function (data) {
        teamName = data.teamName
        let managerObject = new Manager(data.manager, data.managerID, data.managerEmail, data.managerOfficeNuber)
        employeeObject.push(managerObject);
        buildTeam();
    }, function (err) {
        console.log(err);
    })
}

function buildTeam() {
    inquirer.prompt(questions.addEmployee).then(function (res) {
        switch (res.select) {
            case "Engineer":
                buildEngineer();
                break;
            case "Intern":
                buildIntern();
                break;
            default:
                buildHTML();
                break;
        }
    }, function (err) {
        console.log(err)
    })
}

function buildEngineer() {
    inquirer.prompt(questions.engineerQuestions).then(function (data) {
        let engineerObject = new Engineer(data.engineer, data.engineerID, data.engineerEmail, data.engineerGithub)
        employeeObject.push(engineerObject);
        buildTeam();
    }, function (err) {
        console.log(err);
    })
}

function buildIntern() {
    inquirer.prompt(questions.internQuestions).then(function (data) {
        let internObject = new Intern(data.intern, data.internID, data.internEmail, data.internSchool)
        employeeObject.push(internObject);
        buildTeam();
    }, function (err) {
        console.log(err);
    })
}

function buildHTML() {
    let html = fs.readFileSync("./templates/main.html", "utf8");
    let $main = cheerio.load(html);
    $main("#addEmployee").html("");
    $main("#myTeam").html(teamName);
    writeFileSync("./templates/main.html", $main.html()).then(function () {
        addEmployeeHTML();
    }, function (err) {
        console.log(err)
    })
}

function addEmployeeHTML() {
    if (i < employeeObject.length) {
        person = employeeObject[i++];
        if (person.getRole() === "Manager") {
            addManagerHTML(person)
        } else if (person.getRole() === "Engineer") {
            addEngineerHTML(person)
        } else {
            addInternHTML(person);
        }
    } else {
        let html = fs.readFileSync("./templates/main.html", "utf8");
        writeFileSync(`./output/${teamName}'s Team.html`, html).then(function () {
            readFileSync("./templates/main.html", "utf8").then(async function (html) {
                let $main = cheerio.load(html);
                $main("addEmployee").html("");
                writeFileSync("./templates/main.html", $main.html())
            });
        }, function (err) {
            if (err) throw error;
        });
    }
}

function addManagerHTML(person) {
    let html = fs.readFileSync("./templates/manager.html", "utf8");
    let $manager = cheerio.load(html);
    readFileSync("./templates/main.html", "utf8").then(function (data) {
        let $main = cheerio.load(data)
        $manager("#name").html(person.getName())
        $manager("id").html(person.getID())
        $manager("email").html(person.getEmail())
        $manager("officeNumber").html(person.getOfficeNumber())
        $main("#addEmployee").append($manager.html());
        writeFileSync("./templates/main.html", $main.html()).then(function () {
            addEmployeeHTML();
        }, function (err) {
            console.log(err)
        });
    });
}

function addEngineerHTML(person) {
    let html = fs.readFileSync("./templates/engineer.html", "utf8");
    let $engineer = cheerio.load(html);
    readFileSync("./templates/main.html", "utf8").then(function (data) {
        let $main = cheerio.load(data)
        $engineer("#name").html(person.getName())
        $engineer("#id").html(person.getID())
        $engineer("#email").html(person.getEmail())
        $engineer("#github").html(person.getGithub())
        $main("#addEmployee").append($engineer.html());
        writeFileSync("./templates/main.html", $main.html()).then(function () {
            addEmployeeHTML();
        }, function (err) {
            console.log(err)
        });
    });
}

function addInternHTML(person) {
    let html = fs.readFileSync("./templates/intern.html", "utf8");
    let $intern = cheerio.load(html);
    readFileSync("./templates/main.html", "utf8").then(function (data) {
        let $main = cheerio.load(data)
        $intern("#name").html(person.getName())
        $intern("#id").html(person.getId())
        $intern("#email").html(person.getEmail())
        $intern("#school").html(person.getSchool())
        $main("#addEmployee").append($intern.html());
        writeFileSync("./templates/main.html", $main.html()).then(function () {
            addEmployeeHTML();
        }, function (err) {
            console.log(err)
        });
    });
}


