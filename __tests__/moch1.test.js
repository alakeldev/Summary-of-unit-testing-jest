const mocker = require("../mock1");


// to use the mock function =======>>>>>>>>>>  jest.fn
test("Mock Function", () => {
    const mocker = jest.fn((name) => `Hello ${name}`);     // by default here it will return undefined, if you didn't do any functionality on it
    expect(mocker("Alakel")).toBe("Hello Alakel");
    expect(mocker("Abode")).toBe("Hello Abode");
    expect(mocker("Akel")).toBe("Hello Akel");



    expect(mocker).toHaveBeenCalled();   // check if the mocker have been called minimum one time or more 
    // expect(mocker).toHaveBeenCalledTimes(2);   // failed check if the mocker have been called two times and in our example it has been called three times
    expect(mocker).toHaveBeenCalledTimes(3);   // pass check if the mocker have been called three times



    // expect(mocker).toHaveBeenCalledWith("Ahmad"); // failed because it will check on the arguments and cannot find ahmad argument
    expect(mocker).toHaveBeenCalledWith("Akel"); // pass because it will check on the arguments and it will find akel argument


    // expect(mocker).toHaveBeenLastCalledWith("Alakel"); // failed becasue it must be Alakel last argument to call with and it's the first
    expect(mocker).toHaveBeenLastCalledWith("Akel"); // failed becasue it must be Alakel last argument to call with and it's the first
});

