declare const console: { log(...data: any[]): void };

export class ArrayRotation {
  // Brute force: O(n*k) time, O(1) space
  static bruteForce<T>(arr: T[], k: number): T[]{
    const n = arr.length;
    k = k % n;
    for (let i = 0; i < k; i++) {
      const last = arr[n - 1];
        for (let j = n - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = last;
    }
    return arr;
  }
  
  // Reversal algorithm: O(n) time, O(1) space
  static reversalMethod<T>(arr: T[], k: number): T[]{
    const n = arr.length;
    k = k % n;
  }
  
  // Cyclic rotation: O(n) time, demonstrates mathematical approach
  static cyclicMethod<T>(arr: T[], k: number): T[];
}