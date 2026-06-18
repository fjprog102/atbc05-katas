import { DigitRoot } from './sum-digits';

// Example 1
console.log("=== Example 1: 38 ===");
console.log("Iterative:", DigitRoot.iterative(38));
console.log("Mathematical:", DigitRoot.mathematical(38));
console.log("Match:", DigitRoot.iterative(38) === 2 && DigitRoot.mathematical(38) === 2);

// Example 2
console.log("\n=== Example 2: 9875 ===");
console.log("Iterative:", DigitRoot.iterative(9875));
console.log("Mathematical:", DigitRoot.mathematical(9875));
console.log("Match:", DigitRoot.iterative(9875) === 2 && DigitRoot.mathematical(9875) === 2);

// Example 3
console.log("\n=== Example 3: 9 ===");
console.log("Iterative:", DigitRoot.iterative(9));
console.log("Mathematical:", DigitRoot.mathematical(9));
console.log("Match:", DigitRoot.iterative(9) === 9 && DigitRoot.mathematical(9) === 9);

// Example 4
console.log("\n=== Example 4: 0 ===");
console.log("Iterative:", DigitRoot.iterative(0));
console.log("Mathematical:", DigitRoot.mathematical(0));
console.log("Match:", DigitRoot.iterative(0) === 0 && DigitRoot.mathematical(0) === 0);

// Example 5
console.log("\n=== Example 5: -38 ===");
console.log("Iterative:", DigitRoot.iterative(-38));
console.log("Mathematical:", DigitRoot.mathematical(-38));
console.log("Match:", DigitRoot.iterative(-38) === 2 && DigitRoot.mathematical(-38) === 2);

// Example 6
console.log("\n=== Example 6: 999 ===");
console.log("Iterative:", DigitRoot.iterative(999));
console.log("Mathematical:", DigitRoot.mathematical(999));
console.log("Match:", DigitRoot.iterative(999) === 9 && DigitRoot.mathematical(999) === 9);

// Example 7 check iterativeWithSteps 
console.log("\n=== Example 7: iterativeWithSteps(9875) ===");
const detailed = DigitRoot.iterativeWithSteps(9875);
console.log("Result:", detailed.result, "| Steps:", detailed.steps);
console.log("Match:", detailed.result === 2 && detailed.steps === 3);