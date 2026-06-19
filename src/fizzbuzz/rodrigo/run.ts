import { fizzBuzzExtended } from './fizzbuzz';

// Test your implementation manually
const rules = [
  { divisor: 3, word: 'Fizz' },
  { divisor: 5, word: 'Buzz' }
];

const result = fizzBuzzExtended(15, rules);
console.log('Result:', result);
console.log('Element at index 2 (should be Fizz):', result[2]);
console.log('Element at index 14 (should be FizzBuzz):', result[14]);
