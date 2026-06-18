import { DigitRoot } from "./sum-digits";

console.log("38 (debe ser 2):", DigitRoot.iterative(38));
console.log("9875 (debe ser 2):", DigitRoot.iterative(9875));
console.log("9 (debe ser 9):", DigitRoot.iterative(9));
console.log("0 (debe ser 0):", DigitRoot.iterative(0));
console.log("-38 (debe ser 2):", DigitRoot.iterative(-38));