/*
    beforeAll(fn, timeout)   default time out is 5 seconds ////// beforeAll it will work before all tests
    beforeEach(fn, timeout) default timeout is 5 seconds //////// before each test mean that beforeEach will work before each test 

*/

// we need these when we are dealing with db and we dealing with apps that are dealing with db

beforeAll(() => {
    // below Example scenarios:
    // Connect to Database
    // Tmpty testing Table
    // Add dummy data for testing
    // Prepare everything before testing
});

afterAll(() => {
    // Clean Database
    // Clean Cache file

});