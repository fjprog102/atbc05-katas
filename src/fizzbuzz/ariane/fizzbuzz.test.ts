import { fizzBuzzExtended, FizzBuzzRule } from './fizzbuzz';

describe('fizzBuzzExtended', () => {

    it('should generate classic FizzBuzz sequence', () => {
        const rules: FizzBuzzRule[] = [
            { divisor: 3, word: 'Fizz' },
            { divisor: 5, word: 'Buzz' }
        ];

        expect(fizzBuzzExtended(15, rules)).toEqual([
            "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", 
            "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"
        ]);
    });

    it('should generate custom TwoThree sequence', () => {
        const rules: FizzBuzzRule[] = [
            { divisor: 2, word: 'Two' },
            { divisor: 3, word: 'Three' }
        ];

        expect(fizzBuzzExtended(20, rules)).toEqual([
            "1", "Two", "Three", "Two", "5", "TwoThree", "7", 
            "Two", "Three", "Two", "11", "TwoThree", "13", "Two", 
            "Three", "Two", "17", "TwoThree", "19", "Two"
        ]);
    });

    it('should return numbers when no rule matches', () => {
        const rules: FizzBuzzRule[] = [
            { divisor: 10, word: 'Ten' }
        ];

        expect(fizzBuzzExtended(5, rules)).toEqual([
            '1', '2', '3', '4', '5'
        ]);
    });

    it('should concatenate words when multiple rules match', () => {
        const rules: FizzBuzzRule[] = [
            { divisor: 2, word: 'Two' },
            { divisor: 3, word: 'Three' }
        ];

        expect(fizzBuzzExtended(6, rules)[5]).toBe('TwoThree');
    });

    it('should return an empty array when n is 0', () => {
        expect(fizzBuzzExtended(0, [])).toEqual([]);
    });

    it('should return numbers when rules array is empty', () => {
        expect(fizzBuzzExtended(5, [])).toEqual([
            '1', '2', '3', '4', '5'
        ]);
    });

});