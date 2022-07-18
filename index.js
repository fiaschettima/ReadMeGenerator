// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        name: 'title',
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
        name: 'usage',
        type: 'input',
        message: 'Enter a brief explanation of how to use the project',
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data ,(err) =>
    err? console.log(err): console.log(('Success! File Created')));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        const { title } = answers
        writeToFile(`${title}.md`, generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
