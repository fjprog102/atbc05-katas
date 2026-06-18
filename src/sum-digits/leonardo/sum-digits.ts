export class DigitRoot {
    static iterative(num: number): number {
        let currNum = num;
        while(currNum >= 10){
            let sum = currNum
                .toString()
                .split('')
                .reduce((acc, num) => acc + parseInt(num), 0)
            currNum = sum;
        }
        return currNum;
    }

    static mathematical(num: number): number {
        throw Error('Not implemented')
    }

    static iterativeWithSteps(num: number): {result: number, steps: number} {
        throw Error('Not implemented')
    }
}

DigitRoot.iterative(9875);