// call Required Modules
const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

let employees = [];

function getEmployeeInfo(role) {

  return inquirer.prompt([
    {
      name: "employeeName",
      type: "input",
      message: `Please enter the name of the ${role}:`,
    },
    {
      name: "employeeID",
      type: "input",
      message: `Please enter the employee ID of the ${role}:`,
    },
    {
      name: "email",
      type: "input",
      message: `Please enter the email address of the ${role}`,
    },
    
    // subclass specific questions
    // For manager, enter the Office Number
    {
      name: "officeNumber",
      type: "input",
      message: `Please enter the Office Number of the ${role}`,
      when: role === 'Manager',
    },
    // For engineer, enter the Github address
    {
      name: "github",
      type: "input",
      message: `Please enter the Github username of the ${role}`,
      when: role === 'Engineer',
    },
    // For inter, enter the intern's school
    {
      name: "school",
      type: "input",
      message: `Please enter the School of the ${role}`,
      when: role === 'Intern',
    },

    // Present options to add an engineer, add an intern or finish building team
    {
      name: "nextStep",
      type: "list",
      message: "Do you want to add an Engineer or an Intern?",
      choices: [
        "Engineer",
        "Intern",
        "No further entries"
      ],
    }
  ]).then((responses) => {
    // create instance of Manager class
    if (role === 'Manager') {
      employees.push(new Manager(responses.employeeName, responses.employeeID, responses.email, responses.officeNumber));
    };
    // create instance of Engineer class
    if (role === 'Engineer') {
      employees.push(new Engineer(responses.employeeName, responses.employeeID, responses.email, responses.github));
    };
    // create instance of Intern class
    if (role === 'Intern') {
      employees.push(new Intern(responses.employeeName, responses.employeeID, responses.email, responses.school));
    };


    if (responses.nextStep === 'Engineer') {
      return getEmployeeInfo('Engineer');
    } else if (responses.nextStep === 'Intern') {
      return getEmployeeInfo('Intern');
    } else {
      //If finish building team, generate html file
      return writeToFile('index.html', employees.sort(function (a, b) {
        if (a.constructor.name === 'Manager') {
          return -1;
        } else if (b.constructor.name === 'Manager') {
          return 1;
        } else if (a.constructor.name > b.constructor.name) {
          return 1;
        } else { return -1; }
      }));
    }
  })
    .catch((error) => {
      console.log(`Something went wrong.  This is the error message: ${error}`);
    })
}

function writeToFile(fileName, employees) {
  const fileContent = generateHTML(employees);

  // Write the HTML file to the dist folder (overwrite anything already existing there)
  if (fs.existsSync(`./dist/${fileName}`)) {
    fs.unlinkSync(`./dist/${fileName}`)
  }
  fs.writeFileSync(`./dist/${fileName}`, fileContent, 'utf8');
  console.log("Successfully written to disk");
};

// Function call to initialise app
// When application starts, enter team manager's name, employee ID, email address and office number
getEmployeeInfo('Manager');