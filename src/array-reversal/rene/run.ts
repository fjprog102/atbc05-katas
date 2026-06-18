import { ArrayRotation } from './array-reversal';

const testArray = [1, 2, 3, 4, 5];
console.log('Brute Force:');
console.log('K = 2: ' + ArrayRotation.bruteForce(testArray, 2));
console.log('K = 7: ' + ArrayRotation.bruteForce(testArray, 7));
console.log('K = -1: ' + ArrayRotation.bruteForce(testArray, -1));
console.log('K = -7: ' + ArrayRotation.bruteForce(testArray, -7));
console.log('K = 0: ' + ArrayRotation.bruteForce(testArray, 0));
console.log('Empty array: ' + ArrayRotation.bruteForce([], 5));
console.log('Array with strings: ' + ArrayRotation.bruteForce(['a', 'b', 'c'], 5));
console.log('Array with one element: ' + ArrayRotation.bruteForce([100], 5));

console.log('Reversal Method:');
console.log('K = 2: ' + ArrayRotation.reversalMethod(testArray, 2));
console.log('K = 7: ' + ArrayRotation.reversalMethod(testArray, 7));
console.log('K = -1: ' + ArrayRotation.reversalMethod(testArray, -1));
console.log('K = -7: ' + ArrayRotation.reversalMethod(testArray, -7));
console.log('K = 0: ' + ArrayRotation.reversalMethod(testArray, 0));
console.log('Empty array: ' + ArrayRotation.reversalMethod([], 5));
console.log('Array with strings: ' + ArrayRotation.reversalMethod(['a', 'b', 'c'], 5));
console.log('Array with one element: ' + ArrayRotation.reversalMethod([100], 5));

console.log('Comparison with large arrays:');
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