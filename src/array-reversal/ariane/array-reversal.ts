export class ArrayRotation{
    /* Brute Force Function */
    static bruteForce<T>(arr: T[], k: number): T[]{
        const n = arr.length; // Get the length of the array
        if(n === 0 || k === 0){
            return arr; // Return the empty array if there are no elements or no rotations are needed
        }

        k = ((k % n) + n) % n; // Handle cases where k is greater than n and negative k
        for(let i = 0; i < k; i++){
            const lastElement = arr[n - 1]; // save the last element of the array
            for(let j = n -1; j > 0; j--){
                arr[j] = arr[j - 1]; // Shift elements to the right
            }
            arr[0] = lastElement; // Place the last element at the beginning
        }
        return arr;
    }

    /* Reversal Algorithm Function */
    static reversalMethod<T>(arr: T[], k: number): T[]{
        const n = arr.length;
        if(n === 0 || k === 0){
            return arr; 
        }

        k = ((k % n) + n) % n; 
        this.reverseItems(arr, 0, n - 1);
        this.reverseItems(arr, 0, k - 1);
        this.reverseItems(arr, k, n - 1);

        return arr;
    }

    private static reverseItems<T>(arr: T[], left_index: number, rigth_index: number): void{
        while(left_index < rigth_index){
            const temp = arr[left_index]; //save left element in a temporary variable 
            arr[left_index] = arr[rigth_index]; // Move the right element to the left index
            arr[rigth_index] = temp; // Move the saved left element to the right index
            left_index++;
            rigth_index--;
        }
    }

    /* Cyclic rotation Function */
    static cyclicMethod<T>(arr: T[], k: number): T[]{
        const n = arr.length;
        if(n === 0 || k === 0){
            return arr; 
        }

        k = ((k % n) + n) % n; 
        let counter = 0; // number of elements moved

        for(let startIndex = 0; counter < n; startIndex++){
            
            let currentIndex = startIndex;
            let currentValue = arr[startIndex]; 

            do{
                const nextIndex = (currentIndex + k) % n; // Calculate the next index
                const temp = arr[nextIndex]; // Save the value at the next index
                arr[nextIndex] = currentValue; 
                currentValue = temp; 
                currentIndex = nextIndex;
                counter++; 
            }while(currentIndex !== startIndex);
        }
        return arr;
    }
}