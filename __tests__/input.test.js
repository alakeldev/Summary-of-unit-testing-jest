/*
    Filter Function
    [1] If no Name is given it will show "unKnown"
    [2] If Name starts or ends with space it will be trimed
    [3] If name length > 10 it will show only first 10 Characters
    [4] If name Starts with underscore it will not show the underscore


    Note that these points are from the test file related to this function
*/

const theFilter = require("../input");

describe("Validate the input field", () => {

    test("Check if Name is Empty", () => {
        expect(theFilter()).toBe("Unknown");
    });

    test.skip("Check for empty spaces (Start + End)", () => {
        expect(theFilter("  Alakel  ")).toBe("Alakel");
    });

    test("Check if name length > 10 Characters" , () => {
        expect(theFilter("Abdullah_Khaled_Alakel")).toBe("Abdullah_K");
    });

    test.skip("Check if Name Not Starts with Underscore", () => {
        expect(theFilter("_Alakel")).toBe("Alakel");
    });
});