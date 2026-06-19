import { fizzBuzzExtended } from "./fizzbuzz";

const rules1 = [
  { divisor: 3, word: "Fizz" },
  { divisor: 5, word: "Buzz" }
];
const result1 = fizzBuzzExtended(15, rules1);
console.log("Ejemplo 1:", result1);
console.log("Índice 2 (debe ser 'Fizz'):", result1[2]);
console.log("Índice 14 (debe ser 'FizzBuzz'):", result1[14]);

const rules2 = [
  { divisor: 2, word: "Two" },
  { divisor: 3, word: "Three" }
];
const result2 = fizzBuzzExtended(20, rules2);
console.log("\nEjemplo 2:", result2);
console.log("Índice 5 (debe ser 'TwoThree'):", result2[5]);