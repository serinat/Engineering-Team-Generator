# Engineering-Team-Generator

- One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, how we design our code is just as important as the code itself. In this homework assignment, your challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.

## Instructions
You will build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. Following the common templates for user stories, we can frame this challenge as follows:
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles.

How do you deliver this? Here are some guidelines:

Use the Inquirer npm package to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

Your app will run as a Node CLI to gather information about each employee.

In the Develop folder, there is a package.json, so make sure to npm install.
The dependencies are, jest for running the provided tests, and inquirer for collecting input from the user.
There are also unit tests to help you build the classes necessary.
It is recommended that you follow this workflow:

Run tests
Create or update classes to pass a single test case
Repeat

## Hints

Create multiple HTML templates for each type of user. For example, you could use the following templates:

main.html

engineer.html

intern.html

manager.html


You will want to make your methods as pure as possible. This means try to make your methods simple so that they are easier to test.

The different employee types should all inherit some methods and properties from a base class of Employee.

In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.

## Classes
The project must have the these classes: Employee, Manager, Engineer,
Intern. The tests for these classes in the tests directory must all pass.
The first class is an Employee parent class with the following properties and
methods:

name
id
title
getName()
getId()
getEmail()
getRole() // Returns 'Employee'

The other three classes will extend Employee.
In addition to Employee's properties and methods, Manager will also have:

officeNumber

getRole() // Overridden to return 'Manager'

In addition to Employee's properties and methods, Engineer will also have:

github  // GitHub username

getGithub()

getRole() // Overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern will also have:

school

getSchool()

getRole() // Overridden to return 'Intern'


User input
The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

Roster output
The project must generate a team.html page in the output directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:


Name

Role

ID

Role-specific property (School, link to GitHub profile, or office number)

- The objective of this homework was to create a command line application that creates a team roster consisting our desired number of engineers and interns under one manager and display its properties. The process involved running npm install and node app.js to prompt the user to pick a role and provide the ID, email and github for the engineer and ID, email and school of intern, and finally to display the team roster on an html page. I was able to develop the file structure including node_modules, package json, JS files for employee, manager, engineer & intern, and the main, manager, engineer & intern html templates. Unforunately, I wasn't able to get my application to work perfectly. At one point I was able to retrieve all of the data, but for some reason the ID doesn't always show up. In addition, I did not have enough time to work on the styling, my plan is to finish during this Thanksgiving holiday break.

UPDATE: I fixed syntax errors, all data now appends to html. Just need to work on styling!

## Resources

- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs
