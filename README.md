# Professional README Generator
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/samelimill/beetroot-docu-former)
![JS badge](https://img.shields.io/badge/javascript-green?logo=javascript)
![Node badge](https://img.shields.io/badge/node-yellow?logo=node.js)  
A simple README.md generator.
## Objectives
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```  
## Demo

A demo video can be found [here.](https://drive.google.com/file/d/1n0d-VrwD5-pYrGHIbu-Pfsn7AgYMo9wB/view)

## Installation and Usage
To run this app, one will need to install node into the folder where the repository is located, as well as the inquirer package.  
With these elements installed, the user can initialize the app by typing "node index.js" in their command line. The app will walk the user through each step and prompt them to enter information pertaining to their project, including a list of options for licensing. After each question is answered, the app will generate a markdown file named after the user's project, with each field filled with the user's responses and a table of contents for navigation.
