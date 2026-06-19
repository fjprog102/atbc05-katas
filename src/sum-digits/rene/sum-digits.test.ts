import { DigitRoot } from './sum-digits';

describe('Iterative method for sum-digits', () => {
    it('Should return the sum of digits for a positive number', () => {
        const number = 38;
        const expectedResult = 2;
        const actualResult = DigitRoot.iterative(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('Should return the sum of digits for a negative number', () => {
        const number = -38;
        const expectedResult = 2;
        const actualResult = DigitRoot.iterative(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('Should return the sum of digits for a positive number with only one digit', () => {
        const number = 5;
        const expectedResult = 5;
        const actualResult = DigitRoot.iterative(number);
        expect(actualResult).toBe(expectedResult);
    });
    it('Should return the sum of digits for 0', () => {
        const number = 0;
        const expectedResult = 0;
        const actualResult = DigitRoot.iterative(number);
        expect(actualResult).toBe(expectedResult);
    });
});