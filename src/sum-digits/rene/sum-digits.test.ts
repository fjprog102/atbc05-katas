import { DigitRoot } from './sum-digits';

describe('Iterative method for sum-digits', () => {
    it('1. Should return the sum of digits for a positive number with 2 iterations', () => {
        const number = 38;
        const expectedResult = 2;
        const actualResult = DigitRoot.iterative(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('2. Should return the sum of digits for a negative number with 2 iterations', () => {
        const number = -38;
        const expectedResult = 2;
        const actualResult = DigitRoot.iterative(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('3. Should return the sum of digits for a positive number with only one digit', () => {
        const number = 5;
        const expectedResult = 5;
        const actualResult = DigitRoot.iterative(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('4. Should return the sum of digits for 0', () => {
        const number = 0;
        const expectedResult = 0;
        const actualResult = DigitRoot.iterative(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('5. Should return the sum of digits for a positive number with 1 iteration', () => {
        const number = 21;
        const expectedResult = 3;
        const actualResult = DigitRoot.iterative(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('6. Should return the sum of digits for a positive large number', () => {
        const number = 987654321;
        const expectedResult = 9;
        const actualResult = DigitRoot.iterative(number);
        expect(actualResult).toBe(expectedResult);
    });
});

describe('Mathematical method for sum-digits', () => {
    it('1. Should return the sum of digits for a positive number with 2 iterations', () => {
        const number = 38;
        const expectedResult = 2;
        const actualResult = DigitRoot.mathematical(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('2. Should return the sum of digits for a negative number with 2 iterations', () => {
        const number = -38;
        const expectedResult = 2;
        const actualResult = DigitRoot.mathematical(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('3. Should return the sum of digits for a positive number with only one digit', () => {
        const number = 5;
        const expectedResult = 5;
        const actualResult = DigitRoot.mathematical(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('4. Should return the sum of digits for 0', () => {
        const number = 0;
        const expectedResult = 0;
        const actualResult = DigitRoot.mathematical(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('5. Should return the sum of digits for a positive number with 1 iteration', () => {
        const number = 21;
        const expectedResult = 3;
        const actualResult = DigitRoot.mathematical(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('6. Should return the sum of digits for a positive large number', () => {
        const number = 987654321;
        const expectedResult = 9;
        const actualResult = DigitRoot.mathematical(number);
        expect(actualResult).toBe(expectedResult);
    });
});