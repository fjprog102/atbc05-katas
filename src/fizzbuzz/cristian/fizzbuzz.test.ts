import { fizzBuzzExtended } from './fizzbuzz';

describe('fizzBuzzExtended', () => {
    describe('Classic FizzBuzz', () => {
        const rules = [
            { divisor: 3, word: 'Fizz' },
            { divisor: 5, word: 'Buzz' }
        ];

        it('should generate 15 elements', () => {
            const result = fizzBuzzExtended(15, rules);
            expect(result).toHaveLength(15);
        });

        it('should return Fizz for multiples of 3', () => {
            const result = fizzBuzzExtended(15, rules);
            expect(result[2]).toBe('Fizz');
            expect(result[5]).toBe('Fizz');
        });

        it('should return Buzz for multiples of 5', () => {
            const result = fizzBuzzExtended(15, rules);
            expect(result[4]).toBe('Buzz');
            expect(result[9]).toBe('Buzz');
        });

        it('should return FizzBuzz for multiples of 3 and 5', () => {
            const result = fizzBuzzExtended(15, rules);
            expect(result[14]).toBe('FizzBuzz');
        });

        it('should return the number when no rule applies', () => {
            const result = fizzBuzzExtended(15, rules);
            expect(result[0]).toBe('1');
            expect(result[1]).toBe('2');
            expect(result[3]).toBe('4');
        });
    });

    describe('Custom rules', () => {
        const rules = [
            { divisor: 2, word: 'Two' },
            { divisor: 3, word: 'Three' }
        ];

        it('should concatenate words when multiple rules match', () => {
            const result = fizzBuzzExtended(20, rules);
            expect(result[5]).toBe('TwoThree');
        });

        it('should apply only the matching rule', () => {
            const result = fizzBuzzExtended(20, rules);
            expect(result[1]).toBe('Two');
            expect(result[2]).toBe('Three');
        });
    });

    describe('Edge cases', () => {
        it('should return an empty array when n is 0', () => {
            expect(fizzBuzzExtended(0, [])).toEqual([]);
        });

        it('should return numbers as strings when there are no rules', () => {
            expect(fizzBuzzExtended(3, [])).toEqual(['1','2','3']);
        });

        it('should work with a single rule', () => {
            const rules = [{ divisor: 2, word: 'Even' }];
            expect(fizzBuzzExtended(4, rules)).toEqual(['1','Even','3','Even']);
        });
    });
});