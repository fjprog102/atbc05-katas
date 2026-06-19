import { ArrayRotation } from './array-reversal';

describe('Brute force method for array reversal', () => {
    it('1. Should return the array rotated two positions to the right when array length is 5 and k=2', () => {
        const testArray = [1, 2, 3, 4, 5];
        const k = 2;
        const expectedResult = [4, 5, 1, 2, 3];
        const actualResult = ArrayRotation.bruteForce(testArray, k);
        expect(actualResult).toEqual(expectedResult);
    });
    it('2. Should return the array rotated two positions to the right when array length is 5 and k=7', () => {
        const testArray = [1, 2, 3, 4, 5];
        const k = 7;
        const expectedResult = [4, 5, 1, 2, 3];
        const actualResult = ArrayRotation.bruteForce(testArray, k);
        expect(actualResult).toEqual(expectedResult);
    });
    it('3. Should return the array rotated two positions to the left when array length is 5 and k=-2', () => {
        const testArray = [1, 2, 3, 4, 5];
        const k = -2;
        const expectedResult = [3, 4, 5, 1, 2];
        const actualResult = ArrayRotation.bruteForce(testArray, k);
        expect(actualResult).toEqual(expectedResult);
    });
});