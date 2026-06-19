import { fizzBuzzExtended, FizzBuzzRule } from "./fizzbuzz";

const rules: FizzBuzzRule[] = [
  { divisor: 3, word: "Fizz" },
  { divisor: 5, word: "Buzz" }
];

console.log("=== FizzBuzz ===");
console.log(fizzBuzzExtended(15, rules));

const rules2: FizzBuzzRule[] = [
  { divisor: 2, word: "Two" },
  { divisor: 3, word: "Three" }
];

console.log("=== Two - Three ===");
console.log(fizzBuzzExtended(20, rules2));