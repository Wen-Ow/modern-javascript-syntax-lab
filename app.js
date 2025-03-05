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

// Notes:
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

// Notes:
// Array destructuring allows us to unpack values from arrays or properties from objects into distinct variables.
// The square bracket [] syntax assigns pizzaToppings[0] to firstIngredient and pizzaToppings[1] to secondIngredient.
// This is a cleaner and more concise way compared to using pizzaToppings[0] and pizzaToppings[1] manually.

// -------------------------------------------------------------------------------------------- //
