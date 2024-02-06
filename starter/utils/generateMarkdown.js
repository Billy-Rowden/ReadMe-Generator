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
  ${data.intallation}

  ##Usage
  ${data.usage}

  ##License
  ${data.license}

  ##Contributions
  ${data.contributions}

  ##Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact [${data.githubuser}] at (https://github.com/${data.githubuser}) or email ${data.email}.
`;
}

module.exports = generateMarkdown;
