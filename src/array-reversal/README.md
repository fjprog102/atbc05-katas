# Rotate Array by K Positions

## Description

Implement an array rotation algorithm that rotates an array to the right by k positions in-place. The challenge requires understanding different algorithmic approaches and their trade-offs in terms of time and space complexity.

## Examples

- Input: `[1, 2, 3, 4, 5]`, k=2
- Output: `[4, 5, 1, 2, 3]`

- Input: `["a", "b", "c", "d"]`, k=1
- Output: `["d", "a", "b", "c"]`

- Input: `[1, 2, 3]`, k=0
- Output: `[1, 2, 3]`

- Input: `[1, 2, 3]`, k=5
- Output: `[2, 3, 1]` (k wraps around: 5 % 3 = 2)

## Constraints

- Rotate to the RIGHT by k positions
- Implement THREE different approaches:
  1. **Brute Force**: Rotate one position at a time (easier to understand)
  2. **Reversal Algorithm**: Reverse subarrays (optimal O(n) time, O(1) space)
  3. **Cyclic Rotation**: Using cycle detection (demonstrates mathematical thinking)
- Handle k > array length (use modulo)
- Handle negative k values (rotate left)
- Must work with any data type (numbers, strings, objects)
- In-place modification is preferred but not mandatory

## Learning Goals

- Understand algorithmic problem-solving
- Learn multiple approaches to the same problem
- Understand space vs time complexity trade-offs
- Master in-place array manipulation
- Learn the reversal technique for array problems
- Work with TypeScript generics for type safety

## Function Signatures

```typescript
export class ArrayRotation {
  // Brute force: O(n*k) time, O(1) space
  static bruteForce<T>(arr: T[], k: number): T[];
  
  // Reversal algorithm: O(n) time, O(1) space
  static reversalMethod<T>(arr: T[], k: number): T[];
  
  // Cyclic rotation: O(n) time, demonstrates mathematical approach
  static cyclicMethod<T>(arr: T[], k: number): T[];
}
```

## Testing

Create your solution in a student folder (e.g., `student1/array-reversal.ts`) and write tests in `student1/array-reversal.test.ts`.

## Performance Challenge

Verify that all three methods produce identical results. Compare execution time for large arrays (n > 100,000).
