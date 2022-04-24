
function getEmployees(employees) {
  return employees[0].getRole() + employees[0].getName();
}

function generateHTML(employees) {
  
// inc Github links to Github page
// email opens default email program and populates the To field with the address
  

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
</html>
  ${getEmployees(employees)}`;
}


module.exports = generateHTML;