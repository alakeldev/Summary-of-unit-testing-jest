const theFilter = require("../input");

describe("Validate the input field", () => {

    test("Check if Name is Empty", () => {
        expect(theFilter()).toBe("Unknown");
    })

    test("Check for empty spaces (Start + End)", () => {
        expect(theFilter("  Alakel  ")).toBe("Alakel");
    });

    test("Check if name length > 10 Characters" , () => {
        expect(theFilter("Abdullah_Khaled_Alakel")).toBe("Abdullah_K");
    });

    test("Check if Name Not Starts with Underscore", () => {
        expect(theFilter("_Alakel")).toBe("Alakel");
    });
});