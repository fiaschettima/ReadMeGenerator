// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  }
  else{
    return `[![${license}](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})
    `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
   The License used for this project is: <br>${renderLicenseBadge(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 
  
  ${data.description}

  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.Installation}
  
  ## Usage 
  
  ${data.usage}

${renderLicenseSection(data.license)}
  ---
 
  ## Contributing

  ${data.ContributionGuidlines}

  ## Tests
  
 ${data.Test}
  
  ---
  ## Questions

  ![GitHub Account:](https://github.com/${data.gitHubUser})


  Email address: ${data.email}
  
`;
}
module.exports = generateMarkdown;
