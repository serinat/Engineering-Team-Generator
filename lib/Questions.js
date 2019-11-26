/*const questions = module.exports = {

    managerQuestions: [
        questions,
        {
            type: "input",
            message: "Please enter your team name.",
            name: "teamName",
            validate: (input) => {
                if (input.trim().length > 0) {
                    return true
                } else {
                    console.log("Please enter a valid team name");
                    return false
                }
            }
        },
        {
            type: "input",
            message: "Please enter lead manager's name.",
            name: "manager",
            validate: (input) => {
                if (input.trim().length > 0) {
                    return true
                } else {
                    console.log("Please enter a valid name");
                    return false
                }
            }
        },
        {
            type: "input",
            message: "Please enter manager's ID number.",
            name: "managerID",
            validate: (input) => {
                if (isNaN(input)) {
                    console.log("Please enter a valid number");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "Please enter manager's email.",
            name: "managerEmail",
        },
        {
            type: "number",
            message: "Please enter manager's office number.",
            name: "managerNumber",
        },
    ],

    addEmployee: {
        type: "list",
        message: "Please pick the following to add to your team.",
        name: "select",
        choices: [
            "Engineer",
            "Intern",
            "Done adding."
        ]
    },

    engineerQuestions: [
        questions,
        {
            type: "input",
            message: "Please enter engineer's name.",
            name: "engineer",
            validate: (input) => {
                if (input.trim().length > 0) {
                    return true
                } else {
                    console.log("Please enter a valid name");
                    return false
                }
            }
        },
        {
            type: "input",
            message: "Please enter engineer's ID number.",
            name: "engineerID",
            validate: (input) => {
                if (isNaN(input)) {
                    console.log("Please enter a valid number");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "Please enter engineer's email.",
            name: "engineerEmail",
        },
        {
            type: "input",
            message: "Please enter engineer's Github username.",
            name: "engineerGithub",
            validate: (input) => {
                if (input.trim().length > 0) {
                    return true
                } else {
                    console.log("Please enter a valid name");
                    return false
                }
            }
        },
    ],

    internQuestions: [
        questions,
        {
            type: "input",
            message: "Please enter intern's name.",
            name: "intern",
            validate: (input) => {
                if (input.trim().length > 0) {
                    return true
                } else {
                    console.log("Please enter a valid name");
                    return false
                }
            }
        },
        {
            type: "input",
            message: "Please enter intern's ID number.",
            name: "internName",
            validate: (input) => {
                if (isNaN(input)) {
                    console.log("Please enter a valid number");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "Please enter intern's email.",
            name: "internEmail",
        },
        {
            type: "input",
            message: "Please enter intern's school.",
            name: "internSchool",
            validate: (input) => {
                if (input.trim().length > 0) {
                    return true
                } else {
                    console.log("Please enter a valid school name");
                    return false
                }
            }
        },
    ]
}   
*/

const questions = [
    {
        type: "list",
        message: "Select type of user adding to team",
        name: "title",
        choices: [
            "Manager", "Engineer", "Intern"
        ]
    },
    {
        type: "input",
        message: "Enter team member's name",
        name: "name",
    },
    {
        type: "input",
        message: "Enter team member's ID",
        name: "id"
    },
    {
        type: "input",
        message: "Enter team member's email address",
        name: "email"
    },
    {
        type: "input",
        message: "Enter Engineer's Github username",
        name: "github",
        when: function (answers) {
            return answers.title === "Engineer";
        }
    },
    {
        type: "input",
        message: "Enter Intern's school",
        name: "school",
        when: function (answers) {
            return answers.title === "Intern";
        }
    },
    {
        type: "input",
        message: "Enter manager's office number",
        name: "officeNumber",
        when: function (answers) {
            return answers.title === "Manager";
        }
    },
    {
        type: "list",
        message: "Add another team member?",
        name: "repeat",
        choices: [
            "Yes", "No"
        ]
    },
];