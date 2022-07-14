// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
// const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'Title',
        type: 'input',
        message: 'What is the title of your project',
    },
    {
        name: 'description',
        type: 'input',
        message: 'enter a brief description (more can be added later)',
    },
    {
        name: 'Installation',
        type: 'input',
        message: 'Describe how to install the project',
    },
    {
        name: 'ContributionGuidlines',
        type: 'input',
        message: 'Explain rules of use when adding to this project',
    },
    {
        name: 'Test',
        type: 'input',
        message: 'Explain how a user could test this product',
    },
    {
        name: 'license',
        type: 'list',
        message: 'choose a License',
        choices: ['MIT', 'Artistic', 'Apache', 'The Unlicense', 'zLib License', 'Mozilla Public License 2.0'],
    },
    {
        name: 'gitHubUser',
        type: 'input',
        message: 'Enter your github username',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
    })
}

// Function call to initialize app
init();

// const filename = `${answers.name}readme.json`;
// console.log(filename)
// fs.writeFile(filename, JSON.stringify(answers),(err) =>
// err ? console.error(err): console.log('commmit logged'));


// GIVEN a command-line application that accepts user input
    // WHEN I am prompted for information about my application repository
        // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

    // WHEN I enter my project title
        // THEN this is displayed as the title of the README

    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

    // WHEN I choose a license for my application from a list of options
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

    // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

    // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

    // WHEN I click on the links in the Table of Contents
        // THEN I am taken to the corresponding section of the README