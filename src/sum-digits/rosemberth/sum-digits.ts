export class DigitRoot {

  static iterative(num: number): number {
    // handle negatives
    num = Math.abs(num);

    while (num >= 10) {
      let sum = 0;
      while (num > 0) {
        sum += num % 10;   // grab the last digit
        num = Math.floor(num / 10);  // chop it off
      }
      num = sum;
    }

    return num;
  }

  // O(1) formula: digit root = 1 + (n - 1) % 9,  n > 0
  static mathematical(num: number): number {
    num = Math.abs(num);

    if (num === 0) return 0;
    return 1 + (num - 1) % 9;
  }

  // same as iterative but counts how many rounds of summing it took
  static iterativeWithSteps(num: number): { result: number; steps: number } {
    num = Math.abs(num);
    let steps = 0;

    while (num >= 10) {
      let sum = 0;
      while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
      }
      num = sum;
      steps++;
    }

    return { result: num, steps: steps };
  }
}