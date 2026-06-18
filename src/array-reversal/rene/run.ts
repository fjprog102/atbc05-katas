import { ArrayRotation } from './array-reversal';

console.log(ArrayRotation.bruteForce([1, 2, 3, 4, 5], 2));
console.log(ArrayRotation.bruteForce([1, 2, 3, 4, 5], 7));
console.log(ArrayRotation.bruteForce([1, 2, 3, 4, 5], -1));
console.log(ArrayRotation.bruteForce([1, 2, 3, 4, 5], -7));
console.log(ArrayRotation.bruteForce([1, 2, 3, 4, 5], 0));

console.log('---');
console.log(ArrayRotation.reversalMethod([1, 2, 3, 4, 5], 2));
console.log(ArrayRotation.reversalMethod([1, 2, 3, 4, 5], 7));
console.log(ArrayRotation.reversalMethod([1, 2, 3, 4, 5], -1));
console.log(ArrayRotation.reversalMethod([1, 2, 3, 4, 5], -7));
console.log(ArrayRotation.reversalMethod([1, 2, 3, 4, 5], 0));

const largeArray = [];

for (let i = 1; i <= 100000; i++) {
    largeArray.push(i);
}
console.time("Brute Force");
console.log(ArrayRotation.bruteForce(largeArray, 78456904));
console.timeEnd("Brute Force");
console.time("Array rotation");
console.log(ArrayRotation.reversalMethod(largeArray, 78456904));
console.timeEnd("Array rotation");