// Function to generate the card of each employee
function getEmployees(employees) {
  let resultStr = "";

  employees.forEach(employee => {
    resultStr = resultStr + 
    `<div class="card-body">
      <div class="card-title">
        <h2>${employee.getName()}</h2>
        <h2>${employee.getRole()}</h2>
      </div>
      <ul class="card-list">
        <li>ID:  ${employee.getId()}</li>
        <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li>${specialEmployee(employee)}</li>
      </ul>
    </div>`
  });
  return resultStr;
}

// Function to generate sub-class specific items of an employees' card
function specialEmployee(employee) {
  let roleEmployee = employee.getRole();
  let special = ""
  switch (roleEmployee) {
    case '🧑🏼‍💼 Manager':
      special = `Office Number:  ${employee.getOfficeNumber()}`;
      break;
    case '🚂 Engineer':
      // link opens Github page on new tab
      special = `Github:  <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
      break;
    default:
      special = `School:  ${employee.getSchool()}`;
  };
  return special;
};

// Function to generate the index.html file
function generateHTML(employees) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <title>Team Profile</title>
</head>
<body>
  <Header>
    <h1>My Team</h1>
  </Header>
  <main>
    <div class="card-container">
       ${getEmployees(employees)}
    </div>
  </main>
</body>
</html>`;
}

module.exports = generateHTML;