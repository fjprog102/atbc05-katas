# FizzBuzz Extended

## Description

Create a parameterized FizzBuzz implementation that accepts custom divisor rules. Instead of hardcoding 3 and 5, your function should accept an array of rules with divisors and their corresponding words. Rules should be applied in order, and if a number matches multiple rules, concatenate the words in the order the rules appear.

## Examples

- Input: `n=15, rules=[{divisor: 3, word: "Fizz"}, {divisor: 5, word: "Buzz"}]`
- Output: `["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]`

- Input: `n=20, rules=[{divisor: 2, word: "Two"}, {divisor: 3, word: "Three"}]`
- Output: `["1", "Two", "Three", "Two", "5", "TwoThree", "7", "Two", "Three", "Two", "11", "TwoThree", "13", "Two", "Three", "Two", "17", "TwoThree", "19", "Two"]`

## Constraints

- Handle 1 to n inclusive
- Rules can have any divisor (not just 3 and 5)
- Rules are processed in order; concatenate matching words in order
- Numbers with no matching rules should be converted to strings
- Handle edge cases: empty rules, n=0, single rule, overlapping divisors

## Learning Goals

- Work with parameterized logic and reusable functions
- Practice advanced conditional logic
- Understand rule processing and composition
- Handle complex ordering requirements
- Type safety with TypeScript interfaces

## Function Signature

```typescript
interface FizzBuzzRule {
  divisor: number;
  word: string;
}

export function fizzBuzzExtended(n: number, rules: FizzBuzzRule[]): string[]
```

## Testing

Create your solution in a student folder (e.g., `student1/fizzbuzz.ts`) and write tests in `student1/fizzbuzz.test.ts`.
