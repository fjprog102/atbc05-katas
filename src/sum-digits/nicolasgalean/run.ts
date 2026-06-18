declare const console: { log(...data: any[]): void };

import { DigitRoot } from "./sum-digits";

console.log(DigitRoot.iterative(38));                 // Output: 2
console.log(DigitRoot.mathematical(38));              // Output: 2
console.log(DigitRoot.iterativeWithSteps(38));       // Output: { result: 2, steps: 2 }

console.log(DigitRoot.iterative(9875));                 // Output: 2
console.log(DigitRoot.mathematical(9875));              // Output: 2
console.log(DigitRoot.iterativeWithSteps(9875));       // Output: { result: 2, steps: 3 }

console.log(DigitRoot.iterative(9));                 // Output: 9
console.log(DigitRoot.mathematical(9));              // Output: 9
console.log(DigitRoot.iterativeWithSteps(9));       // Output: { result: 9, steps: 0 }      

console.log(DigitRoot.iterative(0));                 // Output: 0
console.log(DigitRoot.mathematical(0));             // Output: 0  
console.log(DigitRoot.iterativeWithSteps(0));       // Output: { result: 0, steps: 0 }

console.log(DigitRoot.iterative(-38));                 // Output: 2
console.log(DigitRoot.mathematical(-38));              // Output: 2
console.log(DigitRoot.iterativeWithSteps(-38));       // Output: { result: 2, steps: 2 }