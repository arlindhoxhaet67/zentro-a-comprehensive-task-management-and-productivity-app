/* 

   Filename: ComplexProgram.js

   Description: This program performs a complex set of operations involving mathematical computations, string manipulations, and data analysis.

*/

// Mathematical operations

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Cannot divide by zero!");
  }
}

function exponentiate(a, b) {
  return Math.pow(a, b);
}

// String manipulations

function reverseString(str) {
  return str.split("").reverse().join("");
}

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Data analysis

function calculateAverage(numbers) {
  let sum = 0;

  numbers.forEach((num) => {
    sum += num;
  });

  return sum / numbers.length;
}

function findMaximum(numbers) {
  let max = numbers[0];

  numbers.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });

  return max;
}

function findMinimum(numbers) {
  let min = numbers[0];

  numbers.forEach((num) => {
    if (num < min) {
      min = num;
    }
  });

  return min;
}

// Complex program execution

const num1 = 10;
const num2 = 5;
const str1 = "Hello, World!";
const str2 = "javascript";
const numbers = [1, 2, 3, 4, 5];

const sum = add(num1, num2);
const difference = subtract(num1, num2);
const product = multiply(num1, num2);
const quotient = divide(num1, num2);
const power = exponentiate(num1, num2);
const reversedString = reverseString(str1);
const capitalizedString = capitalizeString(str2);
const vowelCount = countVowels(str1);
const average = calculateAverage(numbers);
const maximum = findMaximum(numbers);
const minimum = findMinimum(numbers);

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Power:", power);
console.log("Reversed String:", reversedString);
console.log("Capitalized String:", capitalizedString);
console.log("Vowel Count:", vowelCount);
console.log("Average:", average);
console.log("Maximum:", maximum);
console.log("Minimum:", minimum);

// ... More complex code here ...