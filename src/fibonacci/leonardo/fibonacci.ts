export class FibonacciGenerator {
    private _startA: number;
    private _startB: number;

    constructor(startA: number, startB: number) {
        this._startA = startA;
        this._startB = startB;
    }

    getNthIterative(n: number): number {
        if(n === 0) return this._startA;
        if(n === 1) return this._startB;

        for(let i=1; i<n; i++){
            const aux = this._startA + this._startB;
            this._startA = this._startB;
            this._startB = aux;
        }

        return this._startB;
    }

    getNthRecursive(n: number): number {
        throw Error('Not implemented');
    }

    clearCache(): void {
        throw Error('Not implemented')
    }
}