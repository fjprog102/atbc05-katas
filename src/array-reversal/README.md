# Array Reversal

## Description

Write a function that reverses an array in-place without using the built-in reverse() method. You must modify the original array structure and return it.

## Examples

- Input: `[1, 2, 3, 4, 5]`
- Output: `[5, 4, 3, 2, 1]`

- Input: `["a", "b", "c"]`
- Output: `["c", "b", "a"]`

- Input: `[1]`
- Output: `[1]`

- Input: `[]`
- Output: `[]`

## Learning Goals

- Practice array manipulation
- Learn the two-pointer technique
- Understand in-place algorithms
- Work with loops and swapping elements

## Function Signature

```typescript
export function reverseArray<T>(arr: T[]): T[]
```

## Testing

Create your solution in a student folder (e.g., `student1/array-reversal.ts`) and write tests in `student1/array-reversal.test.ts`.
