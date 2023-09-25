// Function to make license badge
function renderLicenseBadge(license) {
  if (license !== 'none'){
    this.license = license.split(' ').join('_');
    return `![License](https://img.shields.io/badge/License-${this.license}-lightblue.svg)`;
  } else {
    return "";
  }
};

// Function for license link
function renderLicenseLink(license) {
  if (license !== 'none'){
    this.license = license.split(' ').join('-');
    return `https://choosealicense.com/licenses/${this.license}`;
  } else {
    return "";
  }
};

// Function that returns the license section of README, returns empty if no license selected
function renderLicenseSection(license) {
  const liLink = renderLicenseBadge(license);
  if (license !== 'none'){
    const urlLicense = license.split(' ').join('-').toLowerCase();
    return `This project is licensed under the [${license}](https://choosealicense.com/licenses/${urlLicense}/) license.`;
  } else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  return `<h1 align="center" id="title">${data.title}</h1>\n
  ${licenseBadge}  
  ## Description  
  ${data.description}  
  ## Table of Contents:  
  [Installation](#installation)  
  [Usage](#usage)  
  [Contribution](#contribution)  
  [Testing](#testing)  
  [License](#license)  
  [Questions](#questions)  

 
  ## Installation  
  ${data.install}
  ## Usage  
  ${data.usage}
  ## Contribution  
  ${data.contribution}
  ## Testing  
  ${data.test}
  ## License  
  ${licenseSection}
  ## Questions  
  Questions or concerns? Please reach out on [Github](https://www.github.com/${data.username}), or email me at [${data.email}](mailto:${data.email}).\n\n
  [Back to Top](#title)`; 
};

module.exports = generateMarkdown;
