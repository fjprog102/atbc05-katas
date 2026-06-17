# TypeScript Kata Exercises

A TypeScript project for solving programming kata challenges.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

- **`npm run build`** - Compile TypeScript to JavaScript (outputs to `dist/`)
- **`npm run dev`** - Run your code directly with ts-node (no compilation needed)
- **`npm test`** - Run all tests once
- **`npm run test:watch`** - Run tests in watch mode (reruns on file changes)
- **`npm run clean`** - Remove compiled files from `dist/`

## Project Structure

```
src/
  ├── index.ts          # Main entry point
  └── __tests__/        # Test files (*.test.ts or *.spec.ts)
```

## Getting Started

1. Create a new TypeScript file in `src/` for your kata
2. Write your solution
3. Create a corresponding test file in `src/__tests__/` with the same name + `.test.ts`
4. Run `npm test` to verify your solution

## Example

To test a kata, create files like:

**src/myKata.ts**
```typescript
export function solve(input: string): string {
  // Your solution here
  return input;
}
```

**src/__tests__/myKata.test.ts**
```typescript
import { solve } from '../myKata';

describe('solve', () => {
  it('should handle basic input', () => {
    expect(solve('test')).toBe('expected output');
  });
});
```

Then run `npm test` to verify!