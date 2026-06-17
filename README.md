# TypeScript Kata Exercises

A TypeScript project for solving programming kata challenges. Each kata folder contains a README with the problem description and requirements.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

## Available Katas

- **`src/fizzbuzz/`** - Parameterized rule processing and composition
- **`src/palindrome/`** - Dynamic programming with subsequence finding
- **`src/fibonacci/`** - Memoization and performance optimization
- **`src/sum-digits/`** - Mathematical optimization and algorithm trade-offs
- **`src/array-reversal/`** - Multiple algorithmic approaches with complexity analysis

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

## Example Solution Structure

For any kata, your file structure would look like:

```
src/fizzbuzz/student1/fizzbuzz.ts
src/fizzbuzz/student1/fizzbuzz.test.ts
```

**src/fizzbuzz/student1/fizzbuzz.ts** - Your implementation file
```typescript
// Import any interfaces or types from the kata README

export function fizzBuzzExtended(n: number, rules: FizzBuzzRule[]): string[] {
  // Your solution implementation here
  // Follow the requirements and constraints from the kata README
}
```

**src/fizzbuzz/student1/fizzbuzz.test.ts** - Your test file
```typescript
import { fizzBuzzExtended } from './fizzbuzz';

describe('fizzBuzzExtended', () => {
  it('should pass the examples from the README', () => {
    const rules = [
      { divisor: 3, word: 'Fizz' },
      { divisor: 5, word: 'Buzz' }
    ];
    
    const result = fizzBuzzExtended(15, rules);
    
    // Add assertions based on examples in the kata README
    expect(result).toBeDefined();
    expect(result.length).toBe(15);
  });

  it('should handle edge cases mentioned in constraints', () => {
    // Test edge cases from the kata README
  });
});
```

Then run `npm test` to verify your solution passes!

## Manual Verification (Without Tests)

You can also run your implementation directly to verify it works manually:

**Create a runner file: `src/fizzbuzz/student1/run.ts`**
```typescript
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
```

**Run it directly with ts-node:**
```bash
npx ts-node src/fizzbuzz/student1/run.ts
```

This approach allows you to:
- Quickly test your implementation without running the full test suite
- See console output for debugging
- Test specific scenarios interactively
- Verify expected behavior before writing formal tests

## Tips for Implementation

1. Read the kata README carefully - understand all constraints and examples
2. Start with edge cases and test them first
3. Run `npm test` frequently to check your progress
4. Use manual verification with `ts-node` for quick debugging
5. For complex katas with multiple approaches, implement and test each one separately