# Fibonacci with Custom Sequence

## Description

Implement a generalized Fibonacci generator that supports custom initial values and sequences. Your function should:
1. Generate the nth Fibonacci number for a sequence starting with custom values
2. Support both iterative (for performance) and recursive (with memoization) approaches
3. Handle very large numbers efficiently
4. Implement caching to avoid redundant calculations

## Examples

- Input: `n=10, startA=0, startB=1` (classic Fibonacci)
- Output: `55`

- Input: `n=8, startA=2, startB=1` (Fibonacci variant)
- Output: `47`

- Input: `n=1, startA=5, startB=3`
- Output: `3`

- Input: `n=2, startA=5, startB=3`
- Output: `8`

## Constraints

- Support any starting values (negative, zero, positive)
- Efficiently handle n up to 100 without stack overflow
- Must support both iterative and memoized recursive implementations
- Implement a cache clearing mechanism
- Handle edge cases: n < 1, very large n, negative starting values

## Learning Goals

- Understand and implement memoization for optimization
- Compare iterative vs recursive approaches
- Optimize algorithms for large inputs
- Work with custom data types and parameters
- Understand performance implications of different approaches

## Function Signatures

```typescript
export class FibonacciGenerator {
  constructor(startA: number, startB: number);

  // Iterative approach - for performance
  getNthIterative(n: number): number;

  // Recursive with memoization
  getNthRecursive(n: number): number;

  // Clear memoization cache
  clearCache(): void;
}
```

## Testing

Create your solution in a student folder (e.g., `student1/fibonacci.ts`) and write tests in `student1/fibonacci.test.ts`.

## Performance Expectation

- Should handle n=100 in milliseconds
- Recursive with memoization should perform similarly to iterative
