
function getEmployees(employees) {
  let resultStr = "";

  employees.forEach(employee => {
    resultStr = resultStr + `<div class="card-body">
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
      <div class="card-body">
        <div class="card-title">
          <h2>Jared</h2>
          <h2>🧑🏼‍💼 Manager</h2>
          <div class="card-list">
            <ul>
              <li>ID:12</li>
              <li>Email: Johnny@blackburn.com.au</li>
              <li>Office Number: 9776 2049</li>
            </ul>
          </div>
        </div>
      </div>

      ${getEmployees(employees)}

      <div class="card-body">
        <div class="card-title">
          <h2>Alec</h2>
          <h2>🚂 Engineer</h2>
          <div class="card-list">
            <ul>
              <li>ID:15</li>
              <li>Email: Engineer@blackburn.com.au</li>
              <li>Github: Github goes here</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="card-title">
          <h2>John</h2>
          <h2>☕ Intern</h2>
          <ul class="card-list">
            <li>ID:5</li>
            <li>Email: Intern@blackburn.com.au</li>
            <li>School: Scarborough</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</body>
</html>`;
}


module.exports = generateHTML;