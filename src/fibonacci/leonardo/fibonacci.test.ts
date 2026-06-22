/// <reference types='jest'/>

import { FibonacciGenerator } from "./fibonacci"

describe('Testing FibonacciGenerator class', () => {
    describe('Given a classic fibonacci sequence (startA=0, startB=1)', () => {
        let fib: FibonacciGenerator;
        
        beforeEach(() => {
            fib = new FibonacciGenerator(0, 1);
        });

        describe('getNthIterative()', () => {
            it('should return 55 when n=10', () => {
                expect(fib.getNthIterative(10)).toBe(55);
            });

            it('should return 0 when n=0 (edge case)', () => {
                expect(fib.getNthIterative(0)).toBe(0);
            });
        });

        describe('getNthRecursive()', () => {
            it('should return 55 when n=10', () => {
                expect(fib.getNthRecursive(10)).toBe(55);
            });

            it('should return 0 when n=0 (edge case)', () => {
                expect(fib.getNthRecursive(0)).toBe(0);
            });
        });
    });

    describe('Given a variant fibonacci sequence (startA=2, startB=1)', () => {
        let fib: FibonacciGenerator;

        beforeEach(() => {
            fib = new FibonacciGenerator(2, 1);
        });

        describe('getNthIterative()', () => {
            it('should return 47 when n=8', () => {
                expect(fib.getNthIterative(8)).toBe(47);
            });
        });

        describe('getNthRecursive()', () => {
            it('should return 47 when n=8', () => {
                expect(fib.getNthRecursive(8)).toBe(47);
            });
        });
    })

    describe('Performance expectations (n up to 100)', () => {
        let fib: FibonacciGenerator;

        beforeEach(() => {
            fib = new FibonacciGenerator(0, 1);
        })

        describe('getNthIterative()', () => {
            it('must handle n=100 in milliseconds', () => {
                const startIterative = performance.now();
                const resIterative = fib.getNthIterative(100);
                const endIterative = performance.now();

                expect(resIterative).toBeGreaterThan(0);
                expect(endIterative - startIterative).toBeLessThan(50);
            })
        })

        describe('getNthRecursive()', () => {
            it('must handle n=100 in milliseconds', () => {
                const startRecursive = performance.now();
                const resRecursive = fib.getNthRecursive(100);
                const endRecursive = performance.now();

                expect(resRecursive).toBeGreaterThan(0);
                expect(endRecursive - startRecursive).toBeLessThan(50);
            })
        })
    })
})