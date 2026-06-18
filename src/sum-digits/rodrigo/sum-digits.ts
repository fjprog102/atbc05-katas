export class DigitRoot {

  private static validate(num: number): number {
    return Math.abs(num);
  }

  // Iterative approach: sum digits until single digit
  static iterative(num: number): number {
    let cleanNum = this.validate(num);

    while (cleanNum >= 10) {
      let currentSum = 0;
      while (cleanNum > 0) {
        currentSum = currentSum + (cleanNum % 10);
        cleanNum = Math.floor(cleanNum / 10);
      }
      cleanNum = currentSum;
    }
    return cleanNum;
  }

  // Mathematical formula: O(1) solution using modular arithmetic
  static mathematical(num: number): number {
    const cleanNum = this.validate(num);
    if (cleanNum === 0) return 0;
    return 1 + ((cleanNum - 1) % 9);
  }

  // Track number of iterations (for iterative approach)
  static iterativeWithSteps(num: number): { result: number; steps: number } {
    let cleanNum = this.validate(num);
    let steps = 0;

    while (cleanNum >= 10) {
      let currentSum = 0;
      while (cleanNum > 0) {
        currentSum += cleanNum % 10;
        cleanNum = Math.floor(cleanNum / 10);
      }
      cleanNum = currentSum;
      steps++;
    }
    return {
      result: cleanNum,
      steps: steps
    };
  }
}
