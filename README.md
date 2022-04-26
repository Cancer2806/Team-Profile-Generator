# Team Profile Generator  

![License](https://img.shields.io/badge/License-MIT-yellow.svg)
  

## Description

The application allows entry of a project team's members at the command line and then generates an html page displaying the Team

  
## Table of Contents

- [Installation](#installation-notes)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)



## Installation Notes  

  The installation should be forked from Github with the directory structure maintained.  Node and inquirer should be installed.   


## Usage 

  Ensure the terminal is pointing to the correct folder and type 'index.js' to start the application.  The programme will prompt for the Team Manager's name and details.  The User will then be given the option of entering additional team members, engineers or interns, or to complete entry by selecting 'No further entries'.  Once the User selects 'No further entries', a responsive html file (index.html) will be generated in the 'dist' folder that will display the team.  Any pre-existing index.html file in that folder will be over-written.  A team can have only one manager, but as many engineers or interns as desired can be entered in any order.  
  
  To view the html file, navigate to the 'dist' folder and open 'index.html' in the browser.  The Team Members will be displayed, with the Manager first, followed by the Engineers and then the Interns.  The link for Github displayed on an engineers' card is clickable and will take the User to the Engineer's Github page.  The email address for each member is also clickable and will open a new email in the default email application addressed to that Team member.  

  The application can be found at:  https://github.com/Cancer2806/Team-Profile-Generator  
  An example of the index.html and accompanying style.css file can be found at:  https://github.com/Cancer2806/Team-Profile-Generator/tree/main/dist  
  A Walkthrough video is provided at:  
  

## Features  

  Of note is the sorting of the Team members by category irrespective of the order in which they were entered, and the ability to open emails from the email address link or an engineer's Github page from the Github username.  Through the use of sub-classes, member specific details can be added, such as Office Number for the Manager.  


## Credits  

  Node, Inquirer and Jest were all used in the development of the application.  Screencastify was used for the videos.  The application was developed as part of the UWA Full Stack Bootcamp.   


## Contributing  

  Suggestions for contributions should be sent by email.   


## Testing  

  Testing is carried out using Jest.  To run the tests, type 'npm test' at the command line   



## Questions
Questions can be submitted through email.  

Github:  Cancer2806

Email:  frank.lavery@westnet.com.au


## License
This project is licensed under [MIT](https://opensource.org/licenses/MIT).