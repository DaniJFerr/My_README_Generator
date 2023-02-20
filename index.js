import fs  from "fs";
import path  from 'path';
import inquirer  from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// array of questions for user

    const questions = async () => {
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
            type: "list",
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

const answers = await questions();
const generate = generateMarkdown(answers);

const data =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>My_README_Generator</title>
</head>
<body>
 <div class="container">

 <div class="jumbotron jumbotron-fluid">
    <h1 class="display-4">My Readme Generator</h1>
    <p class="lead">Create your readme dynamically.</p>
</div>

 <div class="card">
  <div class="card-body">
  <h2>💡${answers.title}</h2>
  </div>
</div>

<div class="card">
<div class="card-body">
<h5>📝 Descrition:<p>${answers.description}</p></h5>
</div>
</div>

<div class="card">
<div class="card-body">
<h5>💾 Installation:<p>${answers.installation}</p></h5>
</div>
</div>

<div class="card">
  <div class="card-body">
  <h5>🎯 Usage:<p>${answers.usage}</p></h5>
  </div>
</div>

<div class="card">
  <div class="card-body">
  <h5>🚀 Features:<p><object data="https://img.shields.io/badge/feature-${answers.features}-yellow"></object></p></h5>
  </div>
</div>

<div class="card">
  <div class="card-body">
  <h5>🚨 Tests:<p>${answers.tests}</p></h4>
  </div>
</div>

<div class="card">
  <div class="card-body">
  <h5>📜 License:<p><object data="https://img.shields.io/badge/license-${answers.license}-brightgreen"></object></p></h5>
  </div>
</div>

<div class="card">
  <div class="card-body">
  <h5>🥇 Credits:<p>${answers.credits}</p></h5>
  </div>
</div>
  </div>

  <div class="footer">My_README_Generator by Daniel.F &copy; 2023</div>
</body>
</html>
`

// function to write the answers on the html file
const createHTMLFile = async (cb = () => {}) => {
    const htmlFileName = "index.html";
    fs.writeFile(htmlFileName, data, cb);
    console.log("index.html created successfully!");
  }
  
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
    
    await writeFile("README.md", generate);
    createHTMLFile(() => console.log(' ☑ index.html created!'));
    console.log(' ☑ README.md created!');
  }

  // function call to initialize program
  init();