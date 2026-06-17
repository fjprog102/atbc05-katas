# Palindrome Subsequence Finder

## Description

Write a function that finds the longest palindromic subsequence in a given string. A subsequence doesn't need to be contiguous but must maintain the relative order of characters. This is a dynamic programming problem that combines string manipulation with algorithmic thinking.

## Examples

- Input: "abacabad"
- Output: `"abaaba"` (length 6)

- Input: "racecar"
- Output: `"racecar"` (length 7, the entire string)

- Input: "abcde"
- Output: `"a"` (or any single character, length 1)

- Input: "aabaa"
- Output: `"aabaa"` (length 5)

## Constraints

- Input can contain any characters (uppercase, lowercase, special characters)
- Must return the actual palindromic subsequence, not just its length
- If multiple palindromes of the same max length exist, return any one of them
- Handle empty strings
- Consider case-sensitivity (e.g., "A" ≠ "a")

## Learning Goals

- Understand dynamic programming concepts
- Work with 2D arrays for memoization
- Implement complex string algorithms
- Optimize for time and space complexity
- Understand subsequences vs substrings

## Function Signature

```typescript
export function longestPalindromicSubsequence(str: string): string
```

## Testing

Create your solution in a student folder (e.g., `student1/palindrome.ts`) and write tests in `student1/palindrome.test.ts`.

## Hint

Consider working backwards: how does the longest palindromic subsequence relate to the reverse of the string?
