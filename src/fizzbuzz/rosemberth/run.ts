import { fizzBuzzExtended } from './fizzbuzz';

console.log("=== Example 1: Classic FizzBuzz (n=15) ===");

const result1 = fizzBuzzExtended(15, [
  { divisor: 3, word: "Fizz" },
  { divisor: 5, word: "Buzz" }
]);

const expected1 = [
  "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
  "11", "Fizz", "13", "14", "FizzBuzz"
];

console.log("Result:", result1);
console.log("Match:", JSON.stringify(result1) === JSON.stringify(expected1));

console.log("\n=== Example 2: Two/Three (n=20) ===");

const result2 = fizzBuzzExtended(20, [
  { divisor: 2, word: "Two" },
  { divisor: 3, word: "Three" }
]);

const expected2 = [
  "1", "Two", "Three", "Two", "5", "TwoThree", "7", "Two", "Three", "Two",
  "11", "TwoThree", "13", "Two", "Three", "Two", "17", "TwoThree", "19", "Two"
];

console.log("Result:", result2);
console.log("Match:", JSON.stringify(result2) === JSON.stringify(expected2));

console.log("\n=== Example 3: Empty rules (n=5) ===");

const result3 = fizzBuzzExtended(5, []);
const expected3 = ["1", "2", "3", "4", "5"];

console.log("Result:", result3);
console.log("Match:", JSON.stringify(result3) === JSON.stringify(expected3));


console.log("\n=== Example 4: Three rules overlapping (n=12) ===");

const result4 = fizzBuzzExtended(12, [
  { divisor: 2, word: "A" },
  { divisor: 3, word: "B" },
  { divisor: 4, word: "C" }
]);

const expected4 = [
  "1", "A", "B", "AC", "5", "AB",
  "7", "AC", "B", "A", "11", "ABC"
];

console.log("Result:", result4);
console.log("Match:", JSON.stringify(result4) === JSON.stringify(expected4));