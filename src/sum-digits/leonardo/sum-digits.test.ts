/// <reference types="jest" />

import { DigitRoot } from "./sum-digits"

describe('Sum-Digits Tests', () => {
    describe('Exaple Tests', () => {
        it('Should return 2 with input 38', () => {
            expect(DigitRoot.iterative(38)).toBe(2);
            expect(DigitRoot.mathematical(38)).toBe(2);

            const stepsResult = DigitRoot.iterativeWithSteps(38);
            expect(stepsResult.result).toBe(2);
            expect(stepsResult.steps).toBe(2);
        });

        it('Should return 2 with 9875 input', () => {
            expect(DigitRoot.iterative(9875)).toBe(2);
            expect(DigitRoot.mathematical(9875)).toBe(2);

            const stepsResult = DigitRoot.iterativeWithSteps(9875);
            expect(stepsResult.result).toBe(2)
            expect(stepsResult.steps).toBe(3);
        });

        it('Shoulr return 9 with input 9 (single digit)', () => {
            expect(DigitRoot.iterative(9)).toBe(9);
            expect(DigitRoot.mathematical(9)).toBe(9);
            
            const stepsResult = DigitRoot.iterativeWithSteps(9);
            expect(stepsResult.result).toBe(9);
            expect(stepsResult.steps).toBe(0);
        })

        it('Should return 0 with input 0 (bound case)', () => {
            expect(DigitRoot.iterative(0)).toBe(0);
            expect(DigitRoot.mathematical(0)).toBe(0);
            
            const stepsResult = DigitRoot.iterativeWithSteps(0);
            expect(stepsResult.result).toBe(0);
            expect(stepsResult.steps).toBe(0);           
        })

        it('Should return 2 with input -38 (using abso)', () => {
            expect(DigitRoot.iterative(-38)).toBe(2);
            expect(DigitRoot.mathematical(-38)).toBe(2);

            const stepsResult = DigitRoot.iterativeWithSteps(-38);
            expect(stepsResult.result).toBe(2);
            expect(stepsResult.steps).toBe(2);
        })
    })

    describe('Constraints tests', () => {
        it('Should work with negative numbers', () => {
            expect(DigitRoot.iterative(-9)).toBe(9);
            expect(DigitRoot.mathematical(-9)).toBe(9);
            
            expect(DigitRoot.iterative(-9875)).toBe(2);
            expect(DigitRoot.mathematical(-9875)).toBe(2);
        })

        it('Equal results in both iterative and mathematical methods', () => {
            const testCases = [1, 5, 10, 18, 99, 1234, 99999, -12345];
      
            testCases.forEach(num => {
                const iter = DigitRoot.iterative(num);
                const math = DigitRoot.mathematical(num);
                expect(iter).toBe(math);
            });
        })

        it('Should handle large numbers', () => {
            const largeNum = 999999999999;
            expect(DigitRoot.iterative(largeNum)).toBe(9);
            expect(DigitRoot.mathematical(largeNum)).toBe(9);

            const uniqueLargeNum = 123456789123;
            expect(DigitRoot.iterative(uniqueLargeNum)).toBe(6);
            expect(DigitRoot.mathematical(uniqueLargeNum)).toBe(6);
        })

        it('Should work sing 9 multiples', () => {
            expect(DigitRoot.mathematical(18)).toBe(9);
            expect(DigitRoot.mathematical(81)).toBe(9);
            expect(DigitRoot.mathematical(999)).toBe(9);
            
            expect(DigitRoot.mathematical(18)).toBe(DigitRoot.iterative(18));
            expect(DigitRoot.mathematical(81)).toBe(DigitRoot.iterative(81));
        })
    })
})