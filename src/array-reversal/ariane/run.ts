import { ArrayRotation } from './array-reversal';
/* 
    bruteForce
    reversalMethod
    cyclicMethod
*/
console.log(
    ArrayRotation.cyclicMethod([1, 2, 3, 4, 5], 2)
);

console.log(
    ArrayRotation.cyclicMethod(['a', 'b', 'c', 'd'], 1)
);

console.log(
    ArrayRotation.cyclicMethod([1, 2, 3], 0)
);

console.log(
    ArrayRotation.cyclicMethod([1, 2, 3], 5)
);

console.log(
    ArrayRotation.cyclicMethod([1, 2, 3, 4], -1)
);