const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the name of your Project:",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of the purpose and functionality of this Project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter instructions for the user to install your application:",
    },
    {
        type: "input",
        name: "usage",
        message: "Please explain how your application is used:",
    },
    {
        type: "input",
        name: "license",
        message: "Please choose a license for your application:",
        choice: ['MIT', 'Apache 2.0', 'BSL1.0', 'GPLv3.0', 'none']
    },
    {
        type: "input",
        name: "contributions",
        message: "Please mention any contribution guidelines for your Project:",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any test intructions for your application:",
    },
    {
        type: "input",
        name: "githubuser",
        message: "Please enter a link to your GitHub Profile:",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address:",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, err =>{
        if (err) {
            console.error(err);
        }   else {
            console.log(`${fileName} created successfully.`)
        }
    });
}

// function to initialize program
function init() {
    inquirer.createPromptModule(questions).then(answers => {
        // Generate the readme content using generateMarkdown function
        const readmeContent = generateMarkdown(answers);
        // write this content to a new README.md file
        writeToFile('README.md', readmeContent);
    });
}

// function call to initialize program
init();
