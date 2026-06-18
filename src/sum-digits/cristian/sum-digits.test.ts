import { DigitRoot } from './sum-digits';

describe('DigitRoot', () => {
    describe('iterative', () => {
        it('should return 2 for 38', () => {
        expect(DigitRoot.iterative(38)).toBe(2);
        });

        it('should return 2 for 9875', () => {
        expect(DigitRoot.iterative(9875)).toBe(2);
        });

        it('should return 9 for a single digit number 9', () => {
        expect(DigitRoot.iterative(9)).toBe(9);
        });

        it('should return 0 for 0', () => {
        expect(DigitRoot.iterative(0)).toBe(0);
        });

        it('should handle negative numbers', () => {
        expect(DigitRoot.iterative(-38)).toBe(2);
        });
    });

    describe('mathematical', () => {
        it('should return 2 for 38', () => {
        expect(DigitRoot.mathematical(38)).toBe(2);
        });

        it('should return 2 for 9875', () => {
        expect(DigitRoot.mathematical(9875)).toBe(2);
        });

        it('should return 9 for a single digit number 9', () => {
        expect(DigitRoot.mathematical(9)).toBe(9);
        });

        it('should return 0 for 0', () => {
        expect(DigitRoot.mathematical(0)).toBe(0);
        });

        it('should handle negative numbers', () => {
        expect(DigitRoot.mathematical(-38)).toBe(2);
        });
    });

    describe('iterativeWithSteps', () => {
        it('should return result 2 and 2 steps for 38', () => {
        expect(DigitRoot.iterativeWithSteps(38)).toEqual({
            result: 2,
            steps: 2,
        });
        });

        it('should return result 2 and 3 steps for 9875', () => {
        expect(DigitRoot.iterativeWithSteps(9875)).toEqual({
            result: 2,
            steps: 3,
        });
        });

        it('should return result 9 and 0 steps for 9', () => {
        expect(DigitRoot.iterativeWithSteps(9)).toEqual({
            result: 9,
            steps: 0,
        });
        });

        it('should return result 0 and 0 steps for 0', () => {
        expect(DigitRoot.iterativeWithSteps(0)).toEqual({
            result: 0,
            steps: 0,
        });
        });

        it('should handle negative numbers', () => {
        expect(DigitRoot.iterativeWithSteps(-38)).toEqual({
            result: 2,
            steps: 2,
        });
        });
    });
    describe('consistency checks', () => {
        it('iterative and mathematical should return the same result', () => {
        const numbers = [0, 1, 5, 9, 10, 38, 99, 9875, -38, -9999];

        numbers.forEach((num) => {
            expect(DigitRoot.iterative(num)).toBe(
            DigitRoot.mathematical(num)
            );
        });
        });
    });
});