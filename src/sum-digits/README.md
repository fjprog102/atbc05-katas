# Digit Root Calculator

## Description

Implement a digit root calculator that repeatedly sums the digits of a number until a single digit remains. Additionally, provide a mathematical approach using modular arithmetic for O(1) solution. The digit root has interesting mathematical properties and appears in various applications.

## Examples

- Input: 38
- Output: `2` (3+8=11, then 1+1=2)

- Input: 9875
- Output: `2` (9+8+7+5=29, then 2+9=11, then 1+1=2)

- Input: 9
- Output: `9` (single digit)

- Input: 0
- Output: `0`

- Input: -38
- Output: `2` (use absolute value)

## Constraints

- Handle negative numbers (use absolute value)
- Implement both iterative summation AND mathematical formula (digit root = 1 + (n-1) % 9 for n > 0)
- Both methods must produce identical results
- Handle very large numbers
- Must be able to justify which approach is better for different use cases

## Learning Goals

- Understand recursive vs iterative approaches to digit manipulation
- Learn mathematical properties and optimizations
- Implement algorithmic thinking for the same problem
- Understand time complexity trade-offs (O(log n) vs O(1))
- Work with modular arithmetic

## Function Signatures

```typescript
export class DigitRoot {
  // Iterative approach: sum digits until single digit
  static iterative(num: number): number;
  
  // Mathematical formula: O(1) solution using modular arithmetic
  static mathematical(num: number): number;
  
  // Track number of iterations (for iterative approach)
  static iterativeWithSteps(num: number): { result: number; steps: number };
}
```

## Testing

Create your solution in a student folder (e.g., `student1/sum-digits.ts`) and write tests in `student1/sum-digits.test.ts`.

## Bonus Challenge

Can you explain why the mathematical formula works? Document your findings in comments.
