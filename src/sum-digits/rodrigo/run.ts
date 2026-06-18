import { DigitRoot } from './sum-digits';

const num1 = 38;
console.log(`ejemplo con número normal: ${num1}`);
console.log('Método Iterativo (debería ser 2):', DigitRoot.iterative(num1));
console.log('Método Matemático (debería ser 2):', DigitRoot.mathematical(num1));
console.log('Método con Pasos:', DigitRoot.iterativeWithSteps(num1));

console.log('\n-----------------------------------------------\n');

const num2 = 9875;
console.log(`ejemplo con número grande: ${num2}`);
console.log('Método Iterativo (debería ser 2):', DigitRoot.iterative(num2));
console.log('Método Matemático (debería ser 2):', DigitRoot.mathematical(num2));
console.log('Método con Pasos:', DigitRoot.iterativeWithSteps(num2));

console.log('\n-----------------------------------------------\n');

const num3 = -38;
console.log(`ejemplo con número negativo: ${num3}`);
console.log('Método Iterativo (debería usar valor absoluto y dar 2):', DigitRoot.iterative(num3));
console.log('Método Matemático (debería usar valor absoluto y dar 2):', DigitRoot.mathematical(num3));
console.log('Método con Pasos:', DigitRoot.iterativeWithSteps(num3));
console.log('\n-----------------------------------------------\n');

const num4 = 0;
console.log(`ejemplo con número cero: ${num4}`);
console.log('Método Iterativo (debería ser 0):', DigitRoot.iterative(num4));
console.log('Método Matemático (debería ser 0):', DigitRoot.mathematical(num4));
console.log('Método con Pasos (debería tomar 0 pasos):', DigitRoot.iterativeWithSteps(num4));
