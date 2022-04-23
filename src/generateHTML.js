
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
  <link rel="stylesheet" href="./style.css"></link>
  <title>Team Profile</title>
</head>
<body>
  
</body>
</html>
  
  ${getEmployees(employees)}`;
}


module.exports = generateHTML;