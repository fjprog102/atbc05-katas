export class ArrayRotation {
    static bruteForce(arr, k) {
        const n = arr.length;
        if (n === 0)
            return [];
        k = ((k % n) + n) % n;
        for (let i = 0; i < k; i++) {
            const ultimo = arr.pop();
            if (ultimo !== undefined) {
                arr.unshift(ultimo);
            }
        }
        return arr;
    }
    static reversalMethod(arr, k) {
        const n = arr.length;
        if (n === 0)
            return [];
        k = ((k % n) + n) % n;
        const reverse = (start, end) => {
            while (start < end) {
                const temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;
                start++;
                end--;
            }
        };
        reverse(0, n - 1);
        reverse(0, k - 1);
        reverse(k, n - 1);
        return arr;
    }
    static cyclicMethod(arr, k) {
        const n = arr.length;
        if (n === 0)
            return [];
        k = ((k % n) + n) % n;
        if (k === 0)
            return arr;
        let count = 0;
        let start = 0;
        while (count < n) {
            let current = start;
            let prevElement = arr[start];
            while (true) {
                const nextIndex = (current + k) % n;
                const temp = arr[nextIndex];
                arr[nextIndex] = prevElement;
                prevElement = temp;
                current = nextIndex;
                count++;
                if (start === current) {
                    break;
                }
            }
            start++;
        }
        return arr;
    }
}
console.log("Metodo: Brute Force");
let arr1 = [1, 2, 3, 4, 5];
console.log("Original:", [...arr1]);
ArrayRotation.bruteForce(arr1, 2);
console.log("Cambiado k=2:", arr1);
console.log("");
console.log("Metodo: Reversal Method");
let arr2 = [1, 2, 3, 4, 5];
console.log("Original:", [...arr2]);
ArrayRotation.reversalMethod(arr2, 2);
console.log("Cambiado k=2:", arr2);
console.log("");
console.log("Metodo: Cyclic Method");
let arr3 = [1, 2, 3, 4, 5];
console.log("Original:", [...arr3]);
ArrayRotation.cyclicMethod(arr3, 2);
console.log("Cambiado k=2:", arr3);
