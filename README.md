# Summary-of-unit-testing-jest

## Unit Testing:
### What is unit Testing:
- Software testing method that break your software to pieces
- Tests written and run By the software developer
- It test a section (unit) in your App to ensure it works and behaves like expected
- unit test can be for one method
- unit test can be fore the whole class in OOP
- unite test can be the whole Module
- unit test can be done for the whole procedure
- a unit is smallest testable part of any software

### Unit Testing with JS language using JEST:

#### Testing Cycle:

- 1 Your Javascript Functionality code
- 2 Expected Results
- 3 The Testing

in the Testing we have two results success or failed 
if it's faild ----> fix ----> we back to JS functionality code then again Expected Results then Testing ----->

#### Real Life Examples:
- Vue JS component Test
- React JS Component Test
- Angular Component Test
- Test Component + Templates

#### Famous Testing Framewroks:
- JEST => Developed by Facebook
- MOCHA
- JASMINE
- KARMA

#### Why I need To Write Unit Tests:
- Quality Of Code and Design
- Find Issues and Bugs Early
- Functionality Documentation

Also there are many of other reasons not only the three reasons above

#### Types of Tests:
- Unit Test
- Integration Tests
- End to End Tests

# Preparing/setup my project and download the tools:

- Create your project file and open the terminal on this path file using VS-cpde terminal
- Download node JS if you don't have it on your pc (www.nodejs.org) normal setup
to check if you have node js on you pc write on terminal =>      node -v
- write on terminal =>      npm init          ( to initialize your new project)
- then enter --> enter --> enter --> enter (skip)
- download the testing fromework by writing on terminal =>    npm i jest --save-dev  
Important Note: if you have package that it's important for your application to run you must write only --save without -dev
but if you have package not required to run your application and it's only testing your code or remove the comment from your code so add --save-dev 
- now open the file package.json  and edit the field that related to test and write in it "jest"   that's meaning you want to use jest for testing
- download vs-code extensions under name jest (it's important ) +  live server extension also important to work with jest


## Testing Rules:
- Get The Function To test 
- Give Input to the Function
- Define what is the Output
- Check for the Output


TDD => Test Driven Development
- Think about What your code will do
- Write the code
- Test The code


## steps Important to do to make your tests work perfectly

- module exports inside the file that you want to test its components           module.exports = function/module name that you want to test it;
- Import the file you want to test it inside the test file               const name/variable = require("file path that you want to test it");

- you can run the test by writing on the terminal: npm test

- Important note if you want to run the test regularly without writing the command on the terminal open the file package.json and edit the value
of "test" : "jest" ===> "test": "jest --watchAll" 
then the test automatically will each time you save the test file if you don't want just remove the --watchAll then you want to write npm test on the terminal the run the test again
