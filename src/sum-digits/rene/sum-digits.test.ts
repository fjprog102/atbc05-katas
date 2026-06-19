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
});