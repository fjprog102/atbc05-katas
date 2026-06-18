export class DigitRoot {
    // Iterative approach: sum digits until single digit
    static iterative(num) {
        num = Math.abs(num);
        let numstr = num.toString();
        while (numstr.length > 1) {
            let sum = 0;
            for (let i = 0; i < numstr.length; i++) {
                sum += parseInt(numstr[i], 10);
            }
            numstr = sum.toString();
        }
        return parseInt(numstr, 10);
    }
    // Mathematical formula: O(1) solution using modular arithmetic
    static mathematical(num) {
        num = Math.abs(num);
        const result = 1 + (num - 1) % 9;
        return result;
    }
    // Track number of iterations (for iterative approach)
    static iterativeWithSteps(num) {
        num = Math.abs(num);
        let numstr = num.toString();
        let vueltas = 0;
        while (numstr.length > 1) {
            let sum = 0;
            for (let i = 0; i < numstr.length; i++) {
                sum += parseInt(numstr[i], 10);
            }
            numstr = sum.toString();
            vueltas++;
        }
        return {
            result: parseInt(numstr, 10),
            steps: vueltas
        };
    }
}
const casos = [38, 9875, 9, 0, -38, 987598759875];
casos.forEach((caso) => {
    console.log(`Entrada: ${caso}`);
    console.log(`  -> Iterativo:    ${DigitRoot.iterative(caso)}`);
    console.log(`  -> Matemático:   ${DigitRoot.mathematical(caso)}`);
    console.log("-----------------------------------------");
});
