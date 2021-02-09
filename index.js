//TO CREATE README OPEN AN INTEGRATED TERMINAL AND ENTER "NODE INDEX.JS" TO BEGIN README CREATION"
//PLEASE ANSWER QUESTIONS AS ACCURATELY AS POSSIBLE.

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const mit = 'MIT License'
const apache = 'Apache License v2.0'
const gnu = 'GNU General Public License v3.0'
// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Could you give a description of your project?',
    name: 'description'
  },
  {
    type: 'input',
    message: 'Please Input a table of contents for your project.',
    name: 'tableOfContents'
  },
  {
    type: 'input',
    message: 'How is your project installed?',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'What is the usage of this application?',
    name: 'usage'
  },
  {
    type: 'checkbox',
    message: 'What license do you have for this applicaiton?',
    name: 'stack',
    choices: [mit, gnu, apache],
    },
    {
      type: 'input',
      message: 'Who is contributing to this project? Please enter your GitHub Username!',
      name: 'contributing'
    }
      ,
    {
    type: 'input',
    message: 'What are the tests for this project',
    name: 'tests'
    },
    {
      type: 'input',
      message: 'Questions?',
      name: 'questions'
    }
]).then(response => {
  const badge = "https://img.shields.io/github/license/cparros/read-me-gen"
  const readME = `
  # ${response.title} [<img src="${badge}
  
  ## The Description
  ${response.description}

  ## Table of Contents
  ${response.tableOfContents}

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## License
  ${response.stack}

  ## Contributors
  ${response.contributing}

  ## Tests
  ${response.tests}

  ## Questions
  ${response.questions}

  ### Image of code to application (Instructional Video Below Image!)
  ![screenshot](./Images/readmeGen.png)

  ### Instructional video
  https://drive.google.com/file/d/1kA92UGxCvJZp3kEGCHwUm4gV_t4za7a7/view
  `

  
fs.writeFile('README.md', readME, (err) => 
err ? console.error(err) : console.log('Success!'))
  }
)




