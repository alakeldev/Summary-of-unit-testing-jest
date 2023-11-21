/* 
    Note: JSDoc  (Read About it Important)
    theSum Function
    [1] Return 0 if No Number Entered
    [2] Return Number if Only Number Entered
    [3] If There 2 Numbers It return the Sum of these two numbers
    [4]
    [5]

    Here we found that all the function documentation take it from the its test file of this function
*/

const theSum = (...numbers) => {
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};

module.exports = theSum;