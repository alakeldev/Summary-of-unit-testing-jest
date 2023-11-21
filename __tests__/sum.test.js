const theSum = require("../sum");

// Syntax: test(name , function, timeout)
// it(name , function, timeout)
// it is the short name for the test

// //test block
// test("Return 0 if no Number", () => {
//     expect(theSum()).toBe(0);
// });
// //test block
// test("Return the Number", () => {
//     expect(theSum(10)).toBe(10);
// });
// //test block
// test("Return the Sum of num1 + num2", () => {
//     expect(theSum(15, 25)).toBe(40);
// });
// //test block
// test("Return the Sum of num1 + num2 + num3", () => {
//     expect(theSum(10, 20, 30)).toBe(60);
// });
// //test block
// test("Return the Sum of num1 + num2 + num3 + num4", () => {
//     expect(theSum(10, 20, 30, 10)).toBe(70);
// });
// //test block
// test("Return the Sum of all Numbers", () => {
//     expect(theSum(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
// });



/////////////////////////////////////////////////////////////////////


// Describe(name, function)
describe("check the Numbers sum Total", () => {

    describe.only("Check if no or only one number entered", () => {      // we are using here only to only run the check only on this describe tests block
        //test block
        test("Return 0 if no Number", () => {
            expect(theSum()).toBe(0);
        });
        //test block
        test("Return the Number", () => {
            expect(theSum(10)).toBe(10);
        });
    });

    describe("check for more than one number", () => {
        //test block
        test("Return the Sum of num1 + num2", () => {    
            expect(theSum(15, 25)).toBe(40);
        });
        //test block
        test.only("Return the Sum of num1 + num2 + num3", () => {    // we are using here only to only run the check only on this test
            expect(theSum(10, 20, 30)).toBe(60);
        });
        //test block
        test("Return the Sum of num1 + num2 + num3 + num4", () => {
            expect(theSum(10, 20, 30, 10)).toBe(70);
        });
        //test block
        test("Return the Sum of all Numbers", () => {
            expect(theSum(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
        });
    });
});