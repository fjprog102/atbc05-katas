export class FibonacciGenerator {
    private startA: number;
    private startB: number;

    private memo: Map<number, number> = new Map();

    constructor(startA: number, startB: number) {
        this.startA = startA;
        this.startB = startB;   
    }

    /* Iterative */
    getNthIterative(n: number): number{
        if(n < 0) {
            throw new Error("n must be a non-negative integer");
        }
        if(n === 0) {
            return this.startA;
        }
        if(n === 1) {
            return this.startB;
        }
        let a = this.startA;
        let b = this.startB;
        for(let i = 2; i <= n; i++) { // i starts from 2 because we already have the first two numbers
            const next = a + b;
            a = b;
            b = next;
        }
        return b;
    }

    /* Recursive */
    getNthRecursive(n: number): number{
       if(n < 0) {
            throw new Error("n must be a non-negative integer");
        }
        if(n === 0) {
            return this.startA;
        }
        if(n === 1) {
            return this.startB;
        } 
        
        if (!this.memo) { // Check if the map is initialized
            this.memo = new Map();
        }
        if(this.memo.has(n)) {
            return this.memo.get(n)!;
        }

        let result = this.getNthRecursive(n - 1) + this.getNthRecursive(n - 2);
        this.memo.set(n, result); // Store the result in the map before returning
        return result;
    }

    clearCache(): void {
        this.memo.clear(); // Clear the memoization cache
    }
}