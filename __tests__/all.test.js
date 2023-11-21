const allData = require("../all");

// Matchers part 1

// here i want to make a test that check if my array has 6 elements or not
test("check if array conatins 6 elements", () => {
    expect(allData.length).toBe(6);
});

// another way to do the previouse test ///// using toHaveLength without using native method such as .length
test("check if array conatins 6 elements", () => {
    expect(allData).toHaveLength(6);
});


test("check if array conatins 6 elements", () => {
    expect(allData).not.toHaveLength(7);   // pass here because you put not tohavelength and the length of the array is 6 and you want 7 so it's pass
});



// test("check if array conatins 6 elements", () => {
//     expect("Abdullah").toHaveLength(7);   // Here you got an error because Abdullah length is 8 not 7
// });



test("check if array contains number 3 ", () => {
    expect(allData).toContain(3);       // passed becauase the array has number 3
});


// test("check if array contains number 8 ", () => {
//     expect(allData).toContain(8);       // failed becauase the array has not number 8
// });




// test("check if array not contains number 3 ", () => {
//     expect(allData).not.toContain(3);       // failed becauase the array has number 3
// });



test("check if array not contains number 8 ", () => {
    expect(allData).not.toContain(8);       // pass becauase the array has not number 8
});



// using for loop and you want to check if the array has a 0 number inside its elements
test("check if array not contains Number Zero", () => {
    for(let i = 0; i < allData.length; i++) {
        expect(allData[i]).not.toBe(0);       
    }
    
});




// Matchers part 2

// test("Check if array conatins only numbers", () => {
//     for(let i = 0; i < allData.length; i++) {
//         expect(isNaN(allData[i])).toBe(false); // pass because all the elements inside the array are numbers
//     }
// });

// using matcher toBeFalsy();   it's the same work and behaviuor of the previous test
test("check if array contains only numbers", () => {
    for(let i = 0; i < allData.length; i++) {
        expect(isNaN(allData[i])).toBeFalsy();
    }
});



test("check if array contains only numbers", () => {
    for (let i = 0; i < allData.length; i++) {
        expect(isNaN(allData[i])).not.toBeTruthy();    // here return failed becuase we put not so it means that the array not only include numbers
    }
});


// using the matcher toBeGreaterThan();
test("Check if array first element is larger than 0.5", () => {
    expect(allData[0]).toBeGreaterThan(0.5);              // pass
});

// other matchers toBeGreaterThanOrEqual() , toBeLessThan() ,  toBeLessThanOrEqual()


test("Check if array first element is larger than or equal to 1", () => {
    expect(allData[0]).toBeGreaterThanOrEqual(1);              // pass
});



test("Check if array first element is less than 5", () => {
    expect(allData[0]).toBeLessThan(5);             // pass
});



test("Check if array first element is less than 5", () => {
    expect(allData[4]).toBeLessThanOrEqual(5);             // pass
});


// Matchers Part 3
// toBeUndefined matcher
test("check for undefined",() => {
    let a;

    expect(a).toBeUndefined();

});


// using toMatch() matcher
test("check for substring inside string by Reqular Expression", () => {
    let myString = "I Love Jest Framework";
    expect(myString).toMatch(/Jest/);

});



// toHaveProperty() matcher  here it accepts and key and its value but please be note that the value is optional

test("Check for property Age inside myObjacet", () => {
    let myObject = {
        name: "Alakel",
        age: 30,
    };
    expect(myObject).toHaveProperty("age");
});




test("Check for property Age inside myObjacet and its value is 30", () => {
    let myObject = {
        name: "Alakel",
        age: 30,
    };
    expect(myObject).toHaveProperty("age", 30);
});

