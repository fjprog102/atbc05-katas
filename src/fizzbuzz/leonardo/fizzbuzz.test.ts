/// <reference types='jest' />

import { fizzbuzzExtended } from './fizzbuzz'

describe('Testing FizzBuzz function', () => {
    
    let res: string[];

    describe('Example Tests', () => {        

        it('Test 1', () => {
            res = fizzbuzzExtended(15, [
                {divisor: 3, word: 'Fizz'},
                {divisor: 5, word: 'Buzz'},
            ])

            expect(res).toBeDefined();
            expect(res).toEqual<string[]>([
                '1', '2', 'Fizz', '4', 'Buzz',
                'Fizz', '7', '8', 'Fizz', 'Buzz', 
                '11', 'Fizz', '13', '14', 'FizzBuzz'
            ])
        })
        
        it('Test 2', () => {
            res = fizzbuzzExtended(20, [
                {divisor: 2, word: 'Two'},
                {divisor: 3, word: 'Three'},
            ])

            expect(res).toBeDefined();
            expect(res).toEqual<string[]>([
                '1', 'Two', 'Three', 'Two', '5', 
                'TwoThree', '7', 'Two', '9', 'TwoThree', 
                '11', 'Two', '13', 'TwoThree', '15', 'Two', 
                '17', 'TwoThree', '19', 'Two'
            ])
        })
    })

    describe('Constraints', () => {
        it('Should include n', () => {
            res = fizzbuzzExtended(3, [
                {divisor: 3, word: 'Fizz'}
            ])

            expect(res).toBeDefined();
            expect(res).toEqual([
                '1', '2', 'Fizz'
            ])
        })

        it('Should use any divisor not only 3 and 5', () => {
            res = fizzbuzzExtended(5, [
                {divisor: 2, word: 'Even'},
                {divisor: 7, word: 'Lucky'},
            ])

            expect(res).toBeDefined();
            expect(res).toEqual([
                '1', 'Even', '3', 'Even', '5'
            ])
        })

        it('Should respect rule order for concatenation', () => {
            res = fizzbuzzExtended(6, [
                {divisor: 2, word: 'Three'},
                {divisor: 3, word: 'Two'},
            ])

            expect(res).toBeDefined();
            expect(res).toEqual([
                '1', 'Three', 'Two',
                '4', '5', 'ThreeTwo'
            ])
        })

        it('Should return string array', () => {
            res = fizzbuzzExtended(2, [{divisor: 5, word: 'Buzz'}]);

            expect(res).toBeDefined();
            expect(res.every(item => typeof item === 'string')).toBe(true);

        })

        it('Should return string representation of numbers from 1 to n if no rules where provided', () => {
            res = fizzbuzzExtended(4, []);

            expect(res).toBeDefined();
            expect(res).toEqual(['1', '2', '3', '4']);
        })

        it('Should return an empty arr if the provided value for n is 0', () => {
            res = fizzbuzzExtended(0, [{divisor: 3, word: 'Fizz'}]);

            expect(res).toBeDefined();
            expect(res).toEqual([]);
        })

        it('Should work with a single rule', () => {
            res = fizzbuzzExtended(4, [{divisor: 2, word: 'Boom'}]);

            expect(res).toBeDefined();
            expect(res).toEqual(['1', 'Boom', '3', 'Boom']);
        })  

        it('Should apply overlapping rules', () => {
            res = fizzbuzzExtended(4, [
                {divisor: 2, word: 'Copy'},
                {divisor: 2, word: 'Cat'},
            ])
        })
    })
})