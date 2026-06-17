/// <reference types="jest" />

import { lpalindrome } from "./lpalindrome"

describe('Testing Palindrome Function', () => {

    it('Should pass example tests', () => {

        it('Should be defined', () => {
            expect(lpalindrome).toBeDefined();
        })

        it('Should return "abacaba" with "abacabad" input', () => {
           const result = lpalindrome ('abacabad');

           expect(result).toBeDefined();
           expect(result).toBe('abacaba');
        })

        it('Should return "racecar" with "racecar" input', () => {
           const result = lpalindrome ('racecar');

           expect(result).toBeDefined();
           expect(result).toBe('racecar');
        })

        it('Should return "a" with "abcde" input', () => {
           const result = lpalindrome ('abcde');

           expect(result).toBeDefined();
           expect(result).toBe('a');
        })

        it('Should return "aabaa" with "aabaa" input', () => {
           const result = lpalindrome ('aabaa');

           expect(result).toBeDefined();
           expect(result).toBe('aabaa');
        })

        it('Should return "bbbb" with "bbbab" input', () => {
           const result = lpalindrome ('aabaa');

           expect(result).toBeDefined();
           expect(result).toBe('aabaa');
        })
    })

    it('Should pass edge cases', () => {
        it('Should work with special chars ("@a#b#a@" -> "@a#b#a@")', () => {
            const result = lpalindrome ('@a#b#a@');

            expect(result).toBeDefined();
            expect(result).toBe('@a#b#a@');
        })

        it('If multiple maximum lenght should return anyone of them ("character" -> "carac"/"racer")', () => {
            const validOutput = ['carac', 'racer'];
            const result = lpalindrome ('character');

            const isValid = validOutput.includes(result);

            expect(result).toBeDefined();
            expect(isValid).toBe(true);
        })

        it('Should return an empty string if an empty string is provided as input', () => {
            const result = lpalindrome('');

            expect(result).toBeDefined();
            expect(result).toBe('');
        })

        it('Should return "a", "b" or "A" with "abA" provided as input (Case sensivity)', () => {
            const validOutput = ['a', 'b', 'A'];
            const result = lpalindrome('abA');

            const isValid = validOutput.includes(result);

            expect(result).toBeDefined();
            expect(isValid).toBe(true);
        })
    })
})