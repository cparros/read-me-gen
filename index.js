//TO CREATE README OPEN AN INTEGRATED TERMINAL AND ENTER "NODE INDEX.JS TO BEGIN README CREATION"

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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
    message: 'What was the motivation behind your project?',
    name: 'motivation'
  },
  {
    type: 'input',
    message: 'What problem does your project solve?',
    name: 'problem'
  },
  {
    type: 'input',
    message: 'What did you learn while completing this project?',
    name: 'learn'
  },
  {
    type: 'input',
    message: 'What is your future plan for this project?',
    name: 'future'
    }
]).then(response => {
  const readME = `
  # ${response.title}

  ## The Description
  ${response.description}

  ## Motivation
  ${response.motivation}

  ## Problem That is Solved
  ${response.problem}

  ## What You Learned
  ${response.learn}

  ## Plans for Future Developement
  ${response.future}

  ### Image of code to application
  ![screenshot](./Images/readmeGen.png)
  `
fs.writeFile('README.md', readME, (err) => 
err ? console.error(err) : console.log('Success!'))
  }
)




