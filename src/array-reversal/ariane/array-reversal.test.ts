import { ArrayRotation } from './array-reversal';

describe('ArrayRotation', () => {
    describe('bruteForce - Rotate one position at a time', () => {
        it('should rotate NUMBERS array by 2 positions to the right', () => {
            expect(ArrayRotation.bruteForce([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
        });

        it('should rotate STRINGS array by 1 positions to the right', () => {            
            expect(ArrayRotation.bruteForce(['a', 'b', 'c', 'd'], 1)).toEqual(['d', 'a', 'b', 'c']);
        });

        it('should rotate NUMBERS array by 0 positions to the right', () => {
            expect(ArrayRotation.bruteForce([1, 2, 3], 0)).toEqual([1, 2, 3]);
        });

        it('should rotate NUMBERS array with length 3 by 5 positions to the right', () => {
            expect(ArrayRotation.bruteForce([1, 2, 3], 5)).toEqual([2, 3, 1]);
        });

        it('should rotate NUMBERS array by 0 positions to the right', () => {
            expect(ArrayRotation.bruteForce([], 3)).toEqual([]);
        });
    });

    describe('reversalMethod - Reverse subarrays', () => {
        it('should rotate NUMBERS array by 2 positions to the right', () => {
            expect(ArrayRotation.reversalMethod([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
        });

        it('should rotate STRINGS array by 1 positions to the right', () => {            
            expect(ArrayRotation.reversalMethod(['a', 'b', 'c', 'd'], 1)).toEqual(['d', 'a', 'b', 'c']);
        });

        it('should rotate NUMBERS array by 0 positions to the right', () => {
            expect(ArrayRotation.reversalMethod([1, 2, 3], 0)).toEqual([1, 2, 3]);
        });

        it('should rotate NUMBERS array with length 3 by 5 positions to the right', () => {
            expect(ArrayRotation.reversalMethod([1, 2, 3], 5)).toEqual([2, 3, 1]);
        });

        it('should rotate NUMBERS array by 0 positions to the right', () => {
            expect(ArrayRotation.reversalMethod([], 3)).toEqual([]);
        });
    });
    describe('cyclicMethod - Using cycle detection', () => {
       it('should rotate NUMBERS array by 2 positions to the right', () => {
            expect(ArrayRotation.cyclicMethod([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
        });

        it('should rotate STRINGS array by 1 positions to the right', () => {            
            expect(ArrayRotation.cyclicMethod(['a', 'b', 'c', 'd'], 1)).toEqual(['d', 'a', 'b', 'c']);
        });

        it('should rotate NUMBERS array by 0 positions to the right', () => {
            expect(ArrayRotation.cyclicMethod([1, 2, 3], 0)).toEqual([1, 2, 3]);
        });

        it('should rotate NUMBERS array with length 3 by 5 positions to the right', () => {
            expect(ArrayRotation.cyclicMethod([1, 2, 3], 5)).toEqual([2, 3, 1]);
        });

        it('should rotate NUMBERS array by 0 positions to the right', () => {
            expect(ArrayRotation.cyclicMethod([], 3)).toEqual([]);
        }); 
    });
});