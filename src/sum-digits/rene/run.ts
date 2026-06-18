import { DigitRoot } from './sum-digits';

console.log(DigitRoot.iterative(38));
console.log(DigitRoot.iterative(9875));
console.log(DigitRoot.iterative(9));
console.log(DigitRoot.iterative(0));
console.log(DigitRoot.iterative(-38));

console.log('---');
console.log(DigitRoot.mathematical(38));
console.log(DigitRoot.mathematical(9875));
console.log(DigitRoot.mathematical(9));
console.log(DigitRoot.mathematical(0));
console.log(DigitRoot.mathematical(-38));

console.log('---');
console.log(DigitRoot.iterativeWithSteps(38));
console.log(DigitRoot.iterativeWithSteps(9875));
console.log(DigitRoot.iterativeWithSteps(9));
console.log(DigitRoot.iterativeWithSteps(0));
console.log(DigitRoot.iterativeWithSteps(-38));