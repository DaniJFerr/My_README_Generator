const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user

const questions= () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?",
            
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "credits",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "features",
            message: "What are the features of this project? ",
            choices: [
                "Html",
                "Css",
                "Bootstrap",
                "Node.js",
                "JavaScript",
                "Phyton",
            ]
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
    ]);
};

// function to write README file
const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(process.cwd(), fileName), data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: '☑ README.md created!' 
            });
        }); 
    }); 
};


// function to initialize program
const init = async () => {
    const answers = await questions();
    const generate = generateMarkdown(answers);
    await writeFile("README.md", generate);
    console.log(' ☑ README.md created!');
}

// function call to initialize program
init();