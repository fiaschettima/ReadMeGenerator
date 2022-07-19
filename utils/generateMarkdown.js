// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var noSpaceLi = license.replace(/\s/g, '_');
  if(license === 'None'){
    return '';
  }

  else{
    return `![${license}](https://img.shields.io/badge/license-${noSpaceLi}-blue.svg)
    `
    
  }
}
// (https://opensource.org/licenses/${license})
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licUrl;
  if(license === 'None'){
    return '';
  }
  
  switch(license){
    case 'MIT':
      licUrl = `https://opensource.org/licenses/MIT`
      break;
    case 'Artistic':
      licUrl = `https://https://opensource.org/licenses/Artistic-2.0`
      break;
    case 'Apache':
      licUrl = `https://https://opensource.org/licenses/Apache-2.0`
      break;  
    case 'The Unlicense':
      licUrl = `https://https://opensource.org/licenses/unlicense`
      break;
    case 'zLib License':
      licUrl = `https://https://opensource.org/licenses/Zlib`
      break;
      case 'Mozilla Public License 2.0':
      licUrl = `https://https://opensource.org/licenses/MPL-2.0`
      break;
      default: licUrl = '';
  }
  
  return `[${renderLicenseBadge(license)}](${licUrl})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license)
  if(license === 'None'){
    return `## License
    No License Selected`
  }
  return `## License
   The License used for this project is: <br>
   ${renderLicenseLink(license)}
`
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

  [ Link to GitHub Account](https://github.com/${data.gitHubUser})


  Email address: ${data.email}
  
`;
}
module.exports = generateMarkdown;
