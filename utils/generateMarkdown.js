// function to generate markdown for README
const generateMarkdown = (data) =>{
  return `
#${data.title} 💡

## Description
📝 ${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)

## Installation
💾 ${data.installation}

## Usage
🎯 ${data.usage}

## Usage
🚀 ${data.features}
![badge](https://img.shields.io/badge/${data.features}-yellow)

<br />

## Tests
🚨${data.tests}

## License
📜 This application is covered by the ${data.license} license.
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Credits
🤝 ${data.credits}

<br />
 This Project was created by [My_README_Generator](https://github.com/DaniJFerr/My_README_Generator) 
    `;
}

export default generateMarkdown;
