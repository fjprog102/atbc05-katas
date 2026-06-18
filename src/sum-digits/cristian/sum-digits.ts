export class DigitRoot {
  // Iterative approach: sum digits until single digit
  static iterative(num: number): number
  {
    if(num<0){
        num = num*(-1);
    }

    while (num >= 10) {
        let digits = String(num).split("");
        let sum = 0;

        for (const digit of digits) {
            sum = sum + Number(digit);
        }

        num = sum;
    }

    return num;
  }
  
  // Mathematical formula: O(1) solution using modular arithmetic
  static mathematical(num: number): number{
    if(num<0){
        num = num*(-1);
    }
    if (num === 0) {
      return 0;
    }
    return 1 + (num - 1) % 9;
  }
  
  // Track number of iterations (for iterative approach)
  static iterativeWithSteps(num: number): { result: number; steps: number }
  {
    if(num<0){
        num = num*(-1);
    }

    let steps = 0;
    while(num>=10)
    {
        let digits = String(num).split("");
        let sum = 0;

        for(const digit of digits)
        {
            sum = sum + Number(digit);
        }
        num = sum;
        steps +=1;
    }
    return { result: num, steps: steps };
  }
}