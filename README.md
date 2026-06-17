# TypeScript Kata Exercises

A TypeScript project for solving programming kata challenges. Each kata folder contains a README with the problem description and requirements.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

## Available Katas

- **`src/fizzbuzz/`** - Classic FizzBuzz problem with conditionals and loops
- **`src/palindrome/`** - String manipulation and two-pointer technique
- **`src/fibonacci/`** - Sequence generation and iteration
- **`src/sum-digits/`** - Number manipulation and arithmetic
- **`src/array-reversal/`** - Array manipulation and in-place algorithms

## Project Structure

```
src/
  ├── fizzbuzz/
  │   ├── README.md              # Problem description
  │   ├── student1/
  │   │   ├── fizzbuzz.ts        # Your solution
  │   │   └── fizzbuzz.test.ts   # Your tests
  │   └── student2/
  │       └── ...
  ├── palindrome/
  │   ├── README.md
  │   └── studentX/
  │       └── ...
  └── ... (other katas)
```

## Getting Started

1. Choose a kata folder (e.g., `src/fizzbuzz/`)
2. Read the `README.md` in that folder to understand the problem
3. Create a folder with your name (e.g., `student1/`)
4. Create your solution file (e.g., `fizzbuzz.ts`)
5. Create a test file with the same name + `.test.ts` (e.g., `fizzbuzz.test.ts`)
6. Run `npm test` to verify your solution

## Scripts

- **`npm run build`** - Compile TypeScript to JavaScript (outputs to `dist/`)
- **`npm test`** - Run all tests across all student solutions
- **`npm run test:watch`** - Run tests in watch mode (reruns on file changes)
- **`npm run dev`** - Run TypeScript files directly with ts-node
- **`npm run clean`** - Remove compiled files from `dist/`

## Example Solution

For the FizzBuzz kata, your file structure would look like:

```
src/fizzbuzz/student1/fizzbuzz.ts
```

**src/fizzbuzz/student1/fizzbuzz.ts**
```typescript
export function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }
  return result;
}
```

**src/fizzbuzz/student1/fizzbuzz.test.ts**
```typescript
import { fizzBuzz } from './fizzbuzz';

describe('fizzBuzz', () => {
  it('should return correct sequence up to 15', () => {
    expect(fizzBuzz(15)).toEqual([
      '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz',
      'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'
    ]);
  });

  it('should handle edge cases', () => {
    expect(fizzBuzz(1)).toEqual(['1']);
    expect(fizzBuzz(3)).toEqual(['1', '2', 'Fizz']);
  });
});
```

Then run `npm test` to verify your solution passes!