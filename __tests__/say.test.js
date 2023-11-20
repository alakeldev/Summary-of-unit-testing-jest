const say = require("../say");  // Import the file/component that we want to test it


test("Say Jest Message", () => {
    expect(say()).toBe("Hello Jest");
});
