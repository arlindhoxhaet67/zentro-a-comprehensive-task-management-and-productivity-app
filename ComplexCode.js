/*
Filename: ComplexCode.js
Content: Complex code demonstrating a sophisticated and creative JavaScript application.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class representing a Book
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
  }
}

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Function to calculate the factorial of a number
function factorial(number) {
  if (number === 0 || number === 1) return 1;

  return number * factorial(number - 1);
}

// Function to find the maximum number in an array
function findMaxNumber(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

// Function to create and display instances of Person and Book classes
function createAndDisplayInstances() {
  const person = new Person("John Doe", 25);
  person.greet();

  const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 432);
  book.displayInfo();
}

// Main function to demonstrate the usage of the above functions
function main() {
  const randomNum = generateRandomNumber(1, 100);
  console.log(`Random number between 1 and 100: ${randomNum}`);

  const primeCheckNum = 17;
  console.log(`${primeCheckNum} is${isPrime(primeCheckNum) ? '' : ' not'} a prime number.`);

  const stringToReverse = "Hello, World!";
  const reversedString = reverseString(stringToReverse);
  console.log(`Reversed string: ${reversedString}`);

  const factorialNum = 5;
  console.log(`Factorial of ${factorialNum}: ${factorial(factorialNum)}`);

  const numbersArray = [10, 5, 35, 17, 8];
  console.log(`Maximum number in the array: ${findMaxNumber(numbersArray)}`);

  createAndDisplayInstances();
}

// Execute the main function
main();