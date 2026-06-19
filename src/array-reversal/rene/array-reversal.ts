export class ArrayRotation {
  // Brute force: O(n*k) time, O(1) space
    static bruteForce<T>(arr: T[], k: number): T[] {
        const result = arr.slice();
        const arrayLength = result.length;
        if (arrayLength === 0) {
            return result;
        }
        k = k % arrayLength;
        if (k < 0) {
            k += arrayLength;
        }
        for (let i = 0; i < k; i++) {
            const lastElement = result[arrayLength - 1];
            for (let j = arrayLength - 1; j > 0; j--) {
                result[j] = result[j - 1];
            }
            result[0] = lastElement;
        }
    return result;
  }

  // Reversal algorithm: O(n) time, O(1) space
  static reversalMethod<T>(arr: T[], k: number): T[] {
    const arrayLength = arr.length;
    if (arrayLength === 0) {
        return arr;
    }
    k = k % arrayLength;
    if (k < 0) {
        k += arrayLength;
    }
    arr.reverse();
    let subarray1 = arr.slice(0, k);
    let subarray2 = arr.slice(k);
    subarray1.reverse();
    subarray2.reverse();
    return subarray1.concat(subarray2);
  }

  // Cyclic rotation: O(n) time, demonstrates mathematical approach
  static cyclicMethod<T>(arr: T[], k: number): T[]{
    return arr;
  }
}