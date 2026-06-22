declare const console: { log(...data: any[]): void };

export class ArrayRotation {

  // Brute force: O(n*k) time, O(1) space
  static bruteForce<T>(arr: T[], k: number): T[] {
    if (arr.length <= 1){

      return arr;

    }else if (k === 0){

      return arr;

    }else if (k > arr.length){

      k = k % arr.length;

    }else if (k < 0){

      k = k + arr.length;

    }

    const n = arr.length;
  
    for (let i = 0; i < k; i++){

      const last = arr[n - 1];
      for (let j = n - 1; j > 0; j--){

        arr[j] = arr[j - 1];

      }

      arr[0] = last;

    }

    return arr;

  }

  // Reversal algorithm: O(n) time, O(1) space
  static reversalMethod<T>(arr: T[], k: number): T[] {
    if (arr.length <= 1){

      return arr;

    }else if (k === 0){

      return arr;

    }else if (k > arr.length){

      k = k % arr.length;

    }else if (k < 0){

      k = k + arr.length;
      
    }

    const n = arr.length;

    const reverse = (start: number, end: number): void=>{

      while(start < end){

        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;

      }
    };

    reverse(0, n - 1); 
    reverse(0, k - 1); 
    reverse(k, n - 1); 
    return arr;
  }

  // Cyclic rotation: O(n) time, demonstrates mathematical approach
  static cyclicMethod<T>(arr: T[], k: number): T[] {
    if (arr.length <= 1){

      return arr;

    }else if (k === 0){

      return arr;

    }else if (k > arr.length){

      k = k % arr.length;

    }else if (k < 0){

      k = k + arr.length;
      
    }

    const n = arr.length;
    let count = 0;
    
    for (let start = 0; count < n; start++){

      let currentVal = start;
      let prevVal = arr[start];

      do{
        
        const nextIdx = (currentVal + k) % n;
        const aux = arr[nextIdx];
        arr[nextIdx] = prevVal;
        prevVal = aux;
        currentVal = nextIdx;
        count++;

      } while (start !== currentVal);
      
    }

    return arr;
  }
}
