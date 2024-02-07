// Create a function to return a badge for the license based on which license is chosen
function licenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-orange.svg)`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This Project is licensed under the ${data.license} license.
${licenseBadge(data.license)}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
If you have any questions, please contact [${data.githubuser}](https://github.com/${data.githubuser}) or email ${data.email}.
`;
}

module.exports = generateMarkdown;
