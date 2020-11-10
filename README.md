# Employee Summary Template Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

## Description

This is a command line application designed to create an employee websitethat displays the employee name, role, email, and room number/github username/school (depending on employee type) for each employee in a manager's team.

## Table of Contents
    
- [Description](#description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
    
## Installation
    
npm i
    
## Usage
    
The application utilizes the npm inquirer package to ask the user a given set of prompts about themselves as well as their employees. There are also validation statements that provide error messages if the responses are not the valid type or (in the case of employee id) is already taken. Once the user has entered the information for the manager (user), they will be asked if they would like to add another employee (either an engineer, an intern, or finished). This will ask a new set of questions for about the next employee. After each employee's information is added, all of their details will be added to an array of employees. This array will be called upon after the user has finished adding employees to create a html document. The html document is created by combining the various html templates together to create one large html document with all of the employees information displayed.
    
## License
    
The project is covered under the MIT license.
    
## Contributing
    
    
 
This is an open source application and welcome for contribution. If you would like to contribute, you can fork my repo and submit any pull request for any features you would like added.    
Contributions are protected by the contributor covenant V2.0. If you have any new features you would like to see added or want to report abuse please contact me at tommywillen12@gmail.com 
Click [here](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md) for more information regarding contributor covenant V2.0.
 
    
## Tests
    
npm run test
    
## Questions
    
GitHub Profile: [TommyWillen](https://github.com/TommyWillen)

Email: tommywillen12@gmail.com