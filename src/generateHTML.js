
function getEmployees(employees) {
  return employees[0].getRole() + employees[1].name;
}

function generateHTML(employees) {
  
// inc Github links to Github page
// email opens default email program and populates the To field with the address
  

  return `HTML markdown file with great big gobs of data including
  
  ${getEmployees(employees)}`;
}


module.exports = generateHTML;