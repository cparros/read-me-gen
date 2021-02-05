// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: 'input',
    input: 'What is the title of your project?',
    name: 'title'
  },
  {
    type: 'input',
    input: 'Could you give a description of your project?',
    name: 'description'
  },
  {
    type: 'input',
    input: 'What was the motivation behind your project?',
    name: 'motivation'
  },
  {
    type: 'input',
    input: 'What problem does your project solve?',
    name: 'problem'
  },
  {
    type: 'input',
    input: 'What did you learn while completing this project?',
    name: 'learn'
  },
  {
    type: 'input',
    input: 'What is your future plan for this project?',
    name: 'future'
    }
]).then(response => {
  const readME = `
  # ${response.title}
  `
fs.writeFile('README.md', readME, (err) => 
err ? console.error(err) : console.log('Success!')
)
})






