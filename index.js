// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please write a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide any installation instructions:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please provide any usage instructions:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide any usage instructions:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide guidelines for contribution:',
        name: 'constribution',
    },
    {
        type: 'input',
        message: 'Please provide instructions for tests:',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Please select a license for this project:',
        name: 'license',
        choices: ['a','b','c'],
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
};

// TODO: Create a function to initialize app
function init() {
   inquirer
    .prompt(questions)
    .then((data) => {
        const markdown = generateMarkdown(data);
        const fileName = `${data.title}README.md`;
        writeToFile(fileName, markdown);
    })
};
// Function call to initialize app
init();
