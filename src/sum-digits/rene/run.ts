import { DigitRoot } from './sum-digits';

console.log('Iterative method:');
console.log('38: ' + DigitRoot.iterative(38));
console.log('9875: ' + DigitRoot.iterative(9875));
console.log('9: ' + DigitRoot.iterative(9));
console.log('0: ' + DigitRoot.iterative(0));
console.log('-38: ' + DigitRoot.iterative(-38));

console.log('Mathematical method:');
console.log('38: ' + DigitRoot.mathematical(38));
console.log('9875: ' + DigitRoot.mathematical(9875));
console.log('9: ' + DigitRoot.mathematical(9));
console.log('0: ' + DigitRoot.mathematical(0));
console.log('-38: ' + DigitRoot.mathematical(-38));

console.log('---');
console.log('Iterative method with steps:');
console.log('38: ', DigitRoot.iterativeWithSteps(38));
console.log('9875: ', DigitRoot.iterativeWithSteps(9875));
console.log('9: ', DigitRoot.iterativeWithSteps(9));
console.log('0: ', DigitRoot.iterativeWithSteps(0));
console.log('-38: ', DigitRoot.iterativeWithSteps(-38));