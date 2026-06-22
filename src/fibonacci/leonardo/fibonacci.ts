export class FibonacciGenerator {
    private _startA: number;
    private _startB: number;
    private _cache: Map<number, number> = new Map();

    constructor(startA: number, startB: number) {
        this._startA = startA;
        this._startB = startB;
    }

    getNthIterative(n: number): number {
        if(n <= 0) return this._startA;
        if(n === 1) return this._startB;

        for(let i=1; i<n; i++){
            const aux = this._startA + this._startB;
            this._startA = this._startB;
            this._startB = aux;
        }

        return this._startB;
    }

    getNthRecursive(n: number): number {
        if(n <= 0) return this._startA;
        if(n === 1) return this._startB;

        const inMemo = this._cache.has(n);

        if(inMemo){
            return this._cache.get(n)!;
        }

        const newVal = this.getNthRecursive(n - 2) + this.getNthRecursive(n - 1);

        this._cache.set(n, newVal);

        return newVal;
    }

    clearCache(): void {
        this._cache = new Map();
    }
}