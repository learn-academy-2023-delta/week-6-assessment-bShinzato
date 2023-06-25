// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("sentenceWithFirstLastCapitalized", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(sentenceWithFirstLastCapitalized(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ReferenceError: sentenceWithCaps is not defined

// b) Create the function that makes the test pass.

// Create function. One parameter.
const sentenceWithFirstLastCapitalized = (arrayOfObjects) => {
  // Declare new variable. Use HOF .map to iterate over arrayOfObjects.
  const firstLastNameCapital = arrayOfObjects.map(value => {
    // Object Destructuring. Use Dot notation for the value of name. Use Built-in Method .split(" "), use space as a delimiter.
    // Built-in Method will return an array with a length of two. 
    // Variable firstName is set to the first element in the array. Variable lastName is set to the second element in the array.
    [firstName, lastName] = value.name.split(" ")
  // Delcare new variable. Call upon our destructured variable firstName.
  // Use Built-in Methods .charAt(), .toUpperCase() to indicate the first index.
  // Use arithmetic Operator +, and Built-in Method .substring(1) to extract characters from our starting index of (1). Returns a substring.
  const firstNameUpperCase = firstName.charAt(0).toUpperCase() + firstName.substring(1)
  // Delcare new variable. Call upon our destructured variable lastName.
  // Use Built-in Methods .charAt(), .toUpperCase() to indicate the first index.
  // Use arithmetic Operator +, and Built-in Method .substring(1) to extract characters from our starting index of (1). Returns a substring.
  const lastNameUpperCase = lastName.charAt(0).toUpperCase() + lastName.substring(1)
  // Declare a new variable. Use dot notation to call upon the occupation.
  const addOcuppation = value.occupation
  // Return a String Interpolation with firstNameUpperCase, lastNameUpperCase, and addOcuppation. Add "is" and "." to match expected outcome.
  return `${firstNameUpperCase} ${lastNameUpperCase} is ${addOcuppation}.`
  })
  // Return firstLastNameCapital outside of the HOF .map.
  return firstLastNameCapital
}


// Pseudo code:
// Create a function called sentenceWithFirstLastCapitalized. Takes one parameter called arrayOfObjects.
// Declare a new variable named firstLastNameCapital
// Use HOF .map to iterate on our arrayOfObjects with one parameter called value.
// We call upon object destructuring with variable names firstName and lastName. Since it is a object use dot notation to call upon .name, use built in method .split(" "). Thus will specify our first element using .split(" ") to firstName and our second element to lastName.
// Declare a new variable named firstNameUpperCase. 
    // Call upon firstName with built in methods .charAt() and .toUpperCase() * can use these because it is a string
    // Use arithmetic operator and built in method .substring(1) to return a substring of the original string.
// declare a new variable named lastNameUpperCase and do the same thing but change firstName to lastName.
// declare a new variable called addOcuppation.
    // Since it is an object we use dot notation to pull the value from the key .occupation.
// return a string interpolation for firstNameUpperCase, lastNameUpperCase and addOccupation. Look at the expected output and insert "is" and a "." within the string interpolation.
// return firstLastNameCapital outside of the HOF block but within setenceWithFirstLastCapitalized function.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("onlyRemainders", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    
    expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// ReferenceError: onlyRemainders is not defined

// b) Create the function that makes the test pass.

const onlyRemainders = (param) => {
  // Use HOF .filter() to iterate and filter out everything that is not a number.
  return param.filter(value => typeof value  === "number")
  // use HOF .map() to interate each value with modulo by 3 to get the remainders.
  .map(value => value % 3)
}

// Pseudo code:
// Create a function called onlyRemainders. Takes 1 parameter.
// Use HOF .filter to iterate over array to check for only Numbers.
// use built-in method typeof, strict equailty operator, and 'number' to specify the datatype.
// use .map and modulo 3 to get the remainders.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumOfCubed", () => {
  it("returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125

    expect(sumOfCubed(cubeAndSum1)).toEqual(99)
    expect(sumOfCubed(cubeAndSum2)).toEqual(1125)
  })
})


// b) Create the function that makes the test pass.
const sumOfCubed = (param) => {
  // declare a new variable, use HOF .map() to iterate on parameter, use ** to indicate a exponent.
  let cubedOfNums = param.map(value => value **3)
  // use HOF .reduce() to iterate over cubedOfNums to accumlate a single value. Using two params.
  return cubedOfNums.reduce((acc, currentValue) => 
  // add the two parameters with the our initial value being 0.
    acc + currentValue, 0
  )
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total


// Pseudo code:
// create a function called sumOfCubed. takes 1 parameter called param.
// declare a new variable named cubedOfNums
// use HOF .map on our parameter to iterate over the array.
// use arithmetic operator ** to specify exponent.
// use HOF .reduce() to iterate over cubedOfNums to accumulate a single value. using two params.
// use arethic operator plus to get the sum of all the numbers.
// indicate our initial value to be 0.
