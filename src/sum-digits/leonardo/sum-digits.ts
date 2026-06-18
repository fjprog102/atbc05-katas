export class DigitRoot {

    static iterative(num: number): number {
        let currNum = Math.abs(num);
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
        return 1 + (Math.abs(num) - 1) % 9;
    }

    static iterativeWithSteps(num: number): {result: number, steps: number} {
        let currNum = Math.abs(num);
        let steps = 0;
        while(currNum >= 10){
            let sum = currNum
                .toString()
                .split('')
                .reduce((acc, num) => acc + parseInt(num), 0)
            currNum = sum;
            steps ++;
        }
        return {result: currNum, steps};
    }
}