export class DigitRoot {
  // Iterative approach: sum digits until single digit
  static iterative(num: number): number {
    num = Math.abs(num);
    while (num > 9) {
      let sum = 0;
      while (num > 0) {
        sum += num % 10;
        num = Math.trunc(num / 10);
      }
      num = sum;
    }
    return num;
  }
  
  // Mathematical formula: O(1) solution using modular arithmetic
  static mathematical(num: number): number {
    num = Math.abs(num);
    let digitRoot = 0;
    if (num != 0) {
      digitRoot = 1 + (num - 1) % 9
    }
    return digitRoot;
  }
  
  // Track number of iterations (for iterative approach)
  static iterativeWithSteps(num: number): { result: number; steps: number } {
    num = Math.abs(num);
    let steps = 0;
    while (num > 9) {
      let sum = 0;
      while (num > 0) {
        sum += num % 10;
        num = Math.trunc(num / 10);
      }
      num = sum;
      steps++;
    }
    return { result: num, steps };
  }
}