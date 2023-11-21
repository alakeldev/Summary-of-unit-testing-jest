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

- module exports inside the file that you want to test its components========>>>>>>>> module.exports = function/module name that you want to test it;
- Import the file you want to test it inside the test file============>>>>>>>>>>>> const name/variable = require("file path that you want to test it");

- you can run the test by writing on the terminal: ==========>>>>>>>>>>> npm test

- Important note if you want to run the test regularly without writing the command on the terminal open the file package.json and edit the value
of "test" : "jest" ===> "test": "jest --watchAll" 
then the test automatically will each time you save the test file if you don't want just remove the --watchAll then you want to write npm test on the terminal the run the test again



## Using only 
you can use only with test and also with describe just to run the test on a specific test or block of describe tests without run the test on the rest.

## using skip
you can use skip some tests and also it works with describe the block of tests so it's important to know skip


## beforeAll , beforeEach
check the file .methods.js and understand the comments inside it


# Matchers:

## toHaveLength   ,,   .toContain  ,,  not.toHaveLength    ,, not.toContain  
check the file all.test.js to understand it all 

also we use for loop inside this file all.test.js important to understand 



## isNaN
is Not a Number

## toBeFalsy   ,, toBeTruthy   ,,  toBeGreaterThan  ,, toBeGreaterThanOrEqual ,,,toBeLessThan  ,, toBeLessThanOrEqual
check the file all.test.js to understand it all



## toBeUndefined  ,,    toMatch   ,, toHaveProperty ,, 
check the file all.test.js to understand it all



## Make Your Own Matcher and extend on the expect method
check the file all.test.js to understand it all

to add your own matcher to the matcher list of jest framework

when we are going to make our own matcher you must use inside your matcher two properties message and pass (and they are build in properties)
check all.test.js file to understand that     ///toBeLargerThan() matcher////


another example to create your own matcher inside the file check all.test.js under name: toBeBetween()



## expect.anything()   ,,, expect.any(Constructor) ,,,   expect.arrayContaining(array)
check the file all.test.js to understand it all


## Code Coverage
it's a way to see what is exactly changed or edit inside your project files.js without test on it 
you write on termianl ==>=>=>=>=>=>=>==>=>=>  npm test -- --coverage

it will initiate the converage file to check the reports 


if you want to don'T write this command and you want to be always note for these changes you gonna follow as per below:

open file: package.json
in the last before the last } you will add:
,
"jest": {
    "collectCoverage": true
}


also one from the option you can add in the same file package.json file below the "collectCoverage": true, as per below

"jest": {
    "collectCoverage": true,
    "coverageReporters": [
        "html"
    ]
}


so That is meaning i want only html repoerts to be initiate inside the coverage file


"jest": {
    "collectCoverage": true,
    "coverageReporters": [
      "html"
    ],
    "coverageDirectory": "reports"
  }

 "coverageDirectory": "reports" =>>>>>>>>>>> Here it means to specify the folder path/name that i want to initiate my reports folders in it
on terminal write =====>>>>>>> npm test -- --coverage



 "collectCoverageFrom": ["**/*.{js,jsx,ts}"]

it means that you want to put the array that you want to collect the coverage from

if you want to ignore some type files you can use

 "coveragePathIgnorePatterns": ["/node_modules/"]   it's by default value that ignore node_modules
 you can add another modules as per example below:
 "coveragePathIgnorePatterns": ["/node_modules/", "/build/"]



 comments inside json file as per below:

 "//2": "Comment to write it inside json file IMPORTANT IMPORTANT",
 "//3": "Comment to write it inside json file IMPORTANT IMPORTANT",

 check package.json file to understand



## Mock functions
Spies functions that checks and spy on the behaviour of the function that my code calling, it helps us to control the test process and its behavior
replace the part the we douldn't control it with a part that we can control it inside the test process

one of the website that make the mock functions: <https://sinonjs.org/>

also jest give it to us with a professional way out of the box