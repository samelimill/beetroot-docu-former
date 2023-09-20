// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [ {
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
    name: 'contribution',
},
{
    type: 'input',
    message: 'Please provide guidelines for contribution:',
    name: 'contribution',
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}README.md`, data, (err) =>
    err ? console.error('Error, try again') : console.log('README created')
);

};

// TODO: Create a function to initialize app
function init() {
   
}

// Function call to initialize app
init();
