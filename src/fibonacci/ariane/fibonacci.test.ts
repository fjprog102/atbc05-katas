import {FibonacciGenerator} from './fibonacci';

describe('FibonacciGenerator', () => {
    describe('getNthIterative', () => {
        it('should return 55 for the classic fibonacci sequence when n=10', () => { 

            const fibo = new FibonacciGenerator(0, 1);
            expect(fibo.getNthIterative(10)).toBe(55);
        });

        it('should return 47 for the fibonacci sequence starting with 2, 1 when n=8', () => {
            const fibo = new FibonacciGenerator(2, 1);
            expect(fibo.getNthIterative(8)).toBe(47);
        }); 

        it('should return startA when n=0', () => {
            const fibo = new FibonacciGenerator(5, 3);
            expect(fibo.getNthIterative(0)).toBe(5);
        });

        it('should return startB when n=1', () => {
            const fibo = new FibonacciGenerator(5, 3);
            expect(fibo.getNthIterative(1)).toBe(3);
        });

        it('should return (startA + startB) when n=2', () => {
            const fibo = new FibonacciGenerator(5, 3);
            expect(fibo.getNthIterative(2)).toBe(8);
        });

        it('should throw an error when n is negative', () => {
            const fibo = new FibonacciGenerator(5, 3);
            expect(() => fibo.getNthIterative(-1)).toThrow("n must be a non-negative integer");
        });
    });

    describe('getNthRecursive', () => {
        it('should return 55 for the classic fibonacci sequence when n=10', () => { 

            const fibo = new FibonacciGenerator(0, 1);
            expect(fibo.getNthRecursive(10)).toBe(55);
        });

        it('should return 47 for the fibonacci sequence starting with 2, 1 when n=8', () => {
            const fibo = new FibonacciGenerator(2, 1);
            expect(fibo.getNthRecursive(8)).toBe(47);
        }); 

        it('should return startA when n=0', () => {
            const fibo = new FibonacciGenerator(5, 3);
            expect(fibo.getNthRecursive(0)).toBe(5);
        });

        it('should return startB when n=1', () => {
            const fibo = new FibonacciGenerator(5, 3);
            expect(fibo.getNthRecursive(1)).toBe(3);
        });

        it('should return (startA + startB) when n=2', () => {
            const fibo = new FibonacciGenerator(5, 3);
            expect(fibo.getNthRecursive(2)).toBe(8);
        });

        it('should throw an error when n is negative', () => {
            const fibo = new FibonacciGenerator(5, 3);
            expect(() => fibo.getNthRecursive(-1)).toThrow("n must be a non-negative integer");
        });
    });

    describe('compare getNthIterative and getNthRecursive', () => {
        it('should return the same result for the classic fibonacci sequence when n=10', () => {
            const fibo = new FibonacciGenerator(0, 1);
            expect(fibo.getNthIterative(10)).toBe(fibo.getNthRecursive(10));
        });
    });

    describe('Performance', () => {
        it('handle n=100 in milliseconds', () => {
            const fib = new FibonacciGenerator(0, 1);
            expect(fib.getNthIterative(100)).toBeDefined();
            expect(fib.getNthRecursive(100)).toBeDefined();
        });
    });
});
