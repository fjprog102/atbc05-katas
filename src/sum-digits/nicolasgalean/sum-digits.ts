declare const console: { log(...data: any[]): void };

export class DigitRoot {
  // Iterative approach: sum digits until single digit
  static iterative(num: number): number{

    let n = Math.abs(num);
    
    if (n === 0){
      return 0;
    }

    while (n >= 10){
      let sum = 0;
      let aux = n;
      while (aux > 0) {
        sum = sum + (aux % 10);
        aux = Math.floor(aux / 10);
      }
      n = sum;
    }

    return n;
  }

  // Mathematical formula: O(1) solution using modular arithmetic
  static mathematical(num: number): number{

    const n = Math.abs(num);

    if (n === 0){
      return 0;
    }

    return 1 + (n - 1) % 9;
  }

  // Track number of iterations (for iterative approach)
  static iterativeWithSteps(num: number): { result: number; steps: number }{

    let n = Math.abs(num);
    let steps = 0;

    if (n === 0){
      return { result: 0, steps: 0 };
    }

    while (n >= 10){
      let sum = 0;
      let aux = n;
      while (aux > 0) {
        sum = sum + (aux % 10);
        aux = Math.floor(aux / 10);
      }
      n = sum;
      steps++;
    }

    return { result: n, steps: steps };
  }
}