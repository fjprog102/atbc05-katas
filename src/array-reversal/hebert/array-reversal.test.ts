import { ArrayRotation } from './array-reversal';

describe('ArrayRotation', () => {
    it('should be defined', () => {
        expect(ArrayRotation).toBeDefined();
    });
    it('should return the same array when k=0', () => {
        const result = ArrayRotation.bruteForce([1, 2, 3, 4, 5], 0);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
    it('should return the same array when k=array length', () => {
        const result = ArrayRotation.bruteForce([1, 2, 3, 4, 5], 5);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
    it('should handle negative k values', () => {
        const result = ArrayRotation.bruteForce([1, 2, 3, 4, 5], -1);
        expect(result).toEqual([2, 3, 4, 5, 1]);
    });
    it('should handle negative k values', () => {
        const result = ArrayRotation.bruteForce([1, 2, 3, 4, 5], -4);
        expect(result).toEqual([5, 1, 2, 3, 4]);
    });
    it('should handle k > array length', () => {
        const result = ArrayRotation.bruteForce([1, 2, 3, 4, 5], 7);
        expect(result).toEqual([4, 5, 1, 2, 3]);
    });
    it('should return an empty array when the input array is empty', () => {
        const result = ArrayRotation.bruteForce([], 2);
        expect(result).toEqual([]);
    });
});

describe('Basic examples', () => {
    const result1 = ArrayRotation.bruteForce([1, 2, 3, 4, 5], 2);
    const result2 = ArrayRotation.reversalMethod([1, 2, 3, 4, 5], 2);
    const result3 = ArrayRotation.cyclicMethod([1, 2, 3, 4, 5], 2);
    it('should pass the example [1, 2, 3, 4, 5], k=2 for brute force', () => {
        expect(result1).toEqual([4, 5, 1, 2, 3]);
    });
    it('should pass the example [1, 2, 3, 4, 5], k=2 for reversal method', () => {
        expect(result2).toEqual([4, 5, 1, 2, 3]);
    });
    it('should pass the example [1, 2, 3, 4, 5], k=2 for cyclic method', () => {
        expect(result3).toEqual([4, 5, 1, 2, 3]);
    });
    it('should pass the example ["a", "b", "c", "d"], k=1', () => {
        const results = ArrayRotation.reversalMethod(["a", "b", "c", "d"], 1);
        expect(results).toEqual(["d", "a", "b", "c"]);
    });
    it('should pass the example [1,2,3], k=0', () => {
        const results = ArrayRotation.reversalMethod([1, 2, 3], 0);
        expect(results).toEqual([1, 2, 3]);
    });
    it('should pass the example [1,2,3], k=5', () => {
        const results = ArrayRotation.reversalMethod([1, 2, 3], 5);
        expect(results).toEqual([2, 3, 1]);
    });
    it('should pass the example [true,false,false], k=1', () => {
        const results = ArrayRotation.reversalMethod([true, false, false], 1);
        expect(results).toEqual([false, true, false]);
    });

});

describe('More cases', () => {
    it('should rotate a long list of alternating booleans (k=3)', () => {
        const input = [true, false, true, false, true, false, true, false, true, false, true, false]; // 12 elementos
        const result = ArrayRotation.reversalMethod([...input], 3);
        expect(result).toEqual([false, true, false, true, false, true, false, true, false, true, false, true]);
    });

    it('should rotate an array of short words (k=2)', () => {
        const result = ArrayRotation.reversalMethod(['a', 'b', 'c', 'd'], 2);
        expect(result).toEqual(['c', 'd', 'a', 'b']);
    });

    it('should handle identical strings without altering the apparent order (k=5)', () => {
        const result = ArrayRotation.reversalMethod(['test', 'test', 'test'], 5); // k > longitud (5 % 3 = 2)
        expect(result).toEqual(['test', 'test', 'test']);
    });

    it('should rotate a sequence of 15 numbers (k=5)', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        const result = ArrayRotation.reversalMethod([...input], 5);
        expect(result).toEqual([11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('should rotate a list of 20 identical elements (k=10)', () => {
        const input = Array(20).fill(7);
        const result = ArrayRotation.reversalMethod([...input], 10);
        expect(result).toEqual(Array(20).fill(7));
    });

    it('should rotate a large list of 20 consecutive numbers with a large k (k=42)', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        const result = ArrayRotation.reversalMethod([...input], 42);
        expect(result).toEqual([19, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    });

    it('should rotate an array with mixed data types (k=1)', () => {
        const input = [1, 'dos', true, 4, 'cinco'];
        const result = ArrayRotation.reversalMethod([...input], 1);
        expect(result).toEqual(['cinco', 1, 'dos', true, 4]);
    });

    it('should rotate an array of 10 mixed elements with a negative k (k=-2)', () => {
        const input = [1, 'a', 2, 'b', 3, 'c', true, false, 4, 'd'];
        const result = ArrayRotation.reversalMethod([...input], -2);
        expect(result).toEqual([2, 'b', 3, 'c', true, false, 4, 'd', 1, 'a']);
    });

    it('should maintain the structure if k is exactly equal to the length of a mixed list of 12 elements (k=12)', () => {
        const input = ['inicio', 0, false, 'medio', 9, true, 'fin', 1, 2, 3, 'x', 'y'];
        const result = ArrayRotation.reversalMethod([...input], 12);
        expect(result).toEqual(['inicio', 0, false, 'medio', 9, true, 'fin', 1, 2, 3, 'x', 'y']);
    });
});