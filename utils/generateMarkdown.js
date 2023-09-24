// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'none'){
    this.license = license.split(' ').join('-');
    return `![License](https://img.shields.io/badge/License-${this.license}-blue.svg)`
  } else {
    return "";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'none'){
    this.license = license.split(' ').join('-');
    return `https://choosealicense.com/licenses/mit/${this.license}`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const liLink = renderLicenseBadge(license);
  if (license != 'none'){
    this.license = license.split(' ').join('-');
    return `https://choosealicense.com/licenses/${this.license}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}
  ${licenseBadge}
  ## Table of Contents:
  [Description](#Description)\n
  [Installation](#Installation)\n
  [Usage](#Usage)\n
  [Contribution](#Contribution)\n
  [Testing](#Testing)\n
  [License](#License)\n
  [Questions](#Questions)\n

  ## Description\n${data.description}
  ## Installation\n${data.install}
  ## Usage\n${data.usage}
  ## Contribution\n${data.contribution}
  ## Testing\n${data.test}
  ## License\n${licenseSection};
  ## Questions\nQuestions or concerns? Please reach out on [Github](https://www.github.com/${data.username}), or email me at [${data.email}](mailto:${data.email}).\n\n
  [Back to Top](#table-of-contents)`; 

};

module.exports = generateMarkdown;
