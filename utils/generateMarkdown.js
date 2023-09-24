// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ## Description\n${data.description}
  ## Installation\n${data.install}
  ## Usage\n${data.usage}
  ## Contribution\n${data.contribution}
  ## Testing\n${data.test}
  ## License\n${data.license}
  ## Questions\nPlease reach out to ${data.email} with any questions or concerns!`; 
};

module.exports = generateMarkdown;
