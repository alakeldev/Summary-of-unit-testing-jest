const theSum = require("../sum");

// Syntax: test(name , function, timeout)
// it(name , function, timeout)
// it is the short name for the test

test("Return 0 if no Number", () => {
    expect(theSum()).toBe(0);
});

test("Return the Number", () => {
    expect(theSum(10)).toBe(10);
});

test("Return the Sum of num1 + num2", () => {
    expect(theSum(15, 25)).toBe(40);
});

test("Return the Sum of num1 + num2 + num3", () => {
    expect(theSum(10, 20, 30)).toBe(60);
});