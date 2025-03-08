// Exercise 1: The map() iterator method of arrays

// a. Use the `map()` method to iterate over the provided `nums` array
//
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// c. Console log the new array.
//
// Starting code (don't modify this):

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Your code here:

const numsTimesTwo = nums.map((num) => num * 2);

console.log(numsTimesTwo);

// Output: [ 26, 174, 4, 178, 24, 8, 180, 126 ]

// Personal Notes:
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The map() method calls the provided function once for each element in an array, in order.
// The arrow function is used to multiply each element in the array by 2.
// The map() is a higher order function that iterates over an array and return a new array.

// -------------------------------------------------------------------------------------------- //

// Exercise 2: Array Destructuring

// a. Given the provided `pizzaToppings` array, use destructuring to extract
//    the first and second values and place them into variables. Name the
//    variable that corresponds to the first value `firstIngredient`. Name the
//    variable that corresponds to the second value `secondIngredient`.
//
// b. Console log the `firstIngredient` and `secondIngredient` variables.
//
// Starting code (don't modify this):

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

// Your code here:

const [firstIngredient, secondIngredient] = pizzaToppings;

console.log(firstIngredient); // Output: Pineapple
console.log(secondIngredient); // Output: Olives

// Personal Notes:
// Array destructuring allows us to unpack values from arrays or properties from objects into distinct variables.
// The square bracket [] syntax assigns pizzaToppings[0] to firstIngredient and pizzaToppings[1] to secondIngredient.
// This is a cleaner and more concise way compared to using pizzaToppings[0] and pizzaToppings[1] manually.

// -------------------------------------------------------------------------------------------- //

// Exercise 3: Destructuring Objects

// a. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
//
// b. Console log the `make` and `model` variables.
//
// Starting code (don't modify this):

const car = {
  make: "Audi",
  model: "Q5",
};

// Your code here:

const { make, model } = car;

console.log(make); // Output: Audi
console.log(model); // Output: Q5

// Personal Notes:
// Object destructuring allows us to extract specific properties from an object and assign them to variables.
// The curly braces {} syntax assigns car.make to make and car.model to model.
// { make, model } is a shorthand for { make: make, model: model }.
// This is a cleaner and more concise way compared to using car.make and car.model manually or traditional dot notation.

// -------------------------------------------------------------------------------------------- //

// Exercise 4: Applying the Spread Operator(...) on Arrays

// a. Duplicate the provided `morePizzaToppings` array using the spread
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
//
// b. Console log the `uncontroversialPizzaToppings` variable.
//
// Starting code (don't modify this):

const morePizzaToppings = ["Cheese", "Sauce"];

// Your code here:

const uncontroversialPizzaToppings = [...morePizzaToppings];

console.log(uncontroversialPizzaToppings); // Output: [ 'Cheese', 'Sauce' ]

// Personal Notes:
// The spread operator (...) expands elements intro a new array.
// It creates a shallow copy of the array, keeping the original array intact and safe from modifications.
// It can merge multiple arrays or add elements dynamically.

// -------------------------------------------------------------------------------------------- //

// Exercise 5: Applying the Spread Operator(...) on Objects

// a. Duplicate the provided `anotherCar` object and spread its values into a
//    new variable named `myCar`.
//
// b. Change the `make` and `model` properties of the `myCar` object to new
//    values.
//
// c. Console log both objects and observe the results.
//
// Starting code (don't modify this):

const anotherCar = {
  make: "Toyota",
  model: "RAV4",
};

// Your code here:

const myCar = { ...anotherCar, make: "Kia", model: "K5" };

console.log(anotherCar); // Output: { make: 'Toyota', model: 'RAV4' }
console.log(myCar); // Output: { make: 'Kia', model: 'K5' }"

// Personal Notes:
// The spread operator (...) expands properties into a new object.
// It creates a shallow copy of the object, keeping the original object intact and safe from modifications.
// It can merge multiple objects or add properties dynamically.
// The order of the spread operator matters. The properties of the object on the right will overwrite the properties of the object on the left.
// In this case, the make and model properties of myCar will overwrite the make and model properties of anotherCar.
// The original anotherCar object remains unchanged.

// -------------------------------------------------------------------------------------------- //

// Exercise 6: Dynamic Keys in objects

// a. Define a variable named `propertyName` and assign a string (like
//    'username', 'age', or 'email') to it.
//
// b. Create an object named `userProfile`.
//
// c. Use `propertyName` as a dynamic key in `userProfile`. Assign it a
//    relevant value.
//
// d. Console log the `userProfile` object to see the result.
//
// Your code here:

const propertyName = "username";

const userProfile = {
  [propertyName]: "Johnny Bravo", // Dynamic key assignment
};

console.log(userProfile); // Output: { username: 'Johnny Bravo' }

// Personal Notes:
// [propertyName] is a computed property name, allowing us to use a variable as an object key.
// The key name is determined at runtime, making it dynamic and flexible.
// This is useful when the key name is not known until runtime or when it needs to be determined dynamically.
// Property names in objects are always strings, so the value of propertyName is converted to a string.
// The value of propertyName is used as the key name in the userProfile object.
// The value of the key is assigned to the value of the propertyName variable.

// -------------------------------------------------------------------------------------------- //

// Exercise 7: Practicing Import and Export

// No code is needed for this exercise.

// ---------------------------------------------------------------------------------------------- //

// Exercise 8: Default Parameters

// a. Create a function with two parameters, `noun` and `adjective`.
//
// b. Give `noun` a default value of "cat" and `adjective` a default value of
//    "orange".
//
// c. The function should log a sentence 'The cat is orange.' by default, but
//    should substitute the appropriate parameters when it is supplied with
//    arguments.
//
// Your code here:

function describeAnimal(noun = "cat", adjective = "orange") {
  console.log(`The ${noun} is ${adjective}.`);
}

describeAnimal(); // Output: The cat is orange.
describeAnimal("dog", "brown"); // Output: The dog is brown.
describeAnimal("bird"); // Output: The bird is orange.
describeAnimal(undefined, "green"); // Output: The cat is green.

// Personal Notes:
// Default parameters allow us to set default values for function parameters.
// Template literals (`The ${noun} is ${adjective}.`) allow dynamic string interpolation. They make string concatenation easier and more readable.
// The function can be called with or without arguments.
// If the argument is not provided, the default value is used.
// Default parameters prevent errors when arguuments are not provided.
// Explicitly passing undefined keeps the default value for that parameter.

// ---------------------------------------------------------------------------------------------- //

// Exercise 9: Ternary Operator

// a. Convert the following `if...else` statement into a ternary:
//
//    if (pizza === 'tasty') {
//      console.log('yum');
//    } else {
//      console.log('yuck');
//    }
//
// Starting code (don't modify this):

const pizza = "tasty";

// Your code here:

pizza === "tasty" ? console.log("yum") : console.log("yuck"); // Output: yum

// Personal Notes:
// The ternary operator is a shorthand for the if...else statement.
// It is a conditional operator that takes three operands: condition ? exprIfTrue : exprIfFalse.
// Best used for short, clear expressions. Avoid nesting multiple ternary operators for readability.
// If more logic is needed, use a function instead of a ternary operator.

// ---------------------------------------------------------------------------------------------- //

// Exercise 10: Boolean Gates

// 10.1: Set language using the logical OR (||) operator
// a. Construct a single line of code that assigns a default value using the
//    logical OR operator. This line should match the logic of the following
//    statement:
//
//    "lang is equal to localLangConfig or the default value of English."
//
// b. Create a variable called `lang`.
//
// c. Assign `lang` the value of localLangConfig or 'en' as a default if
//    `localLangConfig is falsy.
//
// d. Log the value of `lang` to the console.
//
// Your code here (localLangConfig is provided to get you started):

// Simulated language configuration (change this variable to test)
const localLangConfig = null; // Change to 'es', 'fr', etc., or leave it `null`.

const lang = localLangConfig || "en";
console.log(lang); // Output: en

// Personal Notes:
// The logical OR (||) operator returns the **first truthy value** or the last value if all are falsy.
// If `localLangConfig` is truthy (e.g., 'es', 'fr'), it will be assigned to `lang`.
// If `localLangConfig` is falsy (e.g., null, undefined, '', 0), the default value 'en' will be assigned to `lang`.
// This approach ensures `lang` always has a valid value.

// ------------------------------------------------------------------------------------------------- //

// 10.2: Set website theme
// Intro: In this exercise, you'll construct a single line of code that assigns
//        a default value to a variable named `theme` using the logical OR
//        operator. This line should match the logic of the following statement:
//
//        "theme is equal to savedUserTheme or the default value of light."
//
// a. Create a variable called `theme`.
//
// b. Assign `theme` the value of `savedUserTheme` or 'light' as a default.
//
// c. Log the value of `theme` to the console.
//
// Your code here (`savedUserTheme` is provided to get you started):

// Simulated user theme preference (change this variable to test)
const savedUserTheme = null; // Change to 'dark', etc., or leave it `null`.

const theme = savedUserTheme || "light";

console.log(theme); // Output: light

// Personal Notes:
// If `savedUserTheme` is truthy (e.g., 'dark'), `theme` takes that value.
// If `savedUserTheme` is falsy (e.g., null, undefined, ''), the default value 'light' is assigned to `theme`.
// This approach ensures `theme` always has a valid value.
// || ensures theme has a valid value when handling multiple falsy cases.
// Short and efficient alternative to if...else conditions.

// ---------------------------------------------------------------------------------------------- //

// Exercise 11: Optional Chaining

// a. Use optional chaining in a console.log so that a console log of
//    `adventurer.cat.age` returns `undefined` instead of an error.
//
// Starting code (don't modify this):

const adventurer = {
  name: "Alice",
};

// Your code here:

console.log(adventurer.cat?.age); // Output: undefined

// Personal Notes:
// Optional chaining (?.) allows safe access to deeply nested properties.
// `adventurer.cat` is checked for existence before accessing `age`.
// If `adventurer.cat` is undefined or null, the expression short-circuits and returns undefined.
// Without `?.`, `console.log(adventurer.cat.age)` would throw error `TypeError: Cannot read properties of undefined (reading 'age')`.
// Optional chaining is useful when dealing with objects that may not have all properties defined.

// ---------------------------------------------------------------------------------------------- //
