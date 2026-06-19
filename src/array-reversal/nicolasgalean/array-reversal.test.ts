import { describe, expect, test } from '@jest/globals';
import { ArrayRotation } from './array-reversal';

describe('Test cases and constraints', () => {
  test('Using README example (k=2)', () => {
    const input = [1, 2, 3, 4, 5];
    expect(ArrayRotation.bruteForce([...input], 2)).toEqual([4, 5, 1, 2, 3]);
    expect(ArrayRotation.reversalMethod([...input], 2)).toEqual([4, 5, 1, 2, 3]);
    expect(ArrayRotation.cyclicMethod([...input], 2)).toEqual([4, 5, 1, 2, 3]);
  });

  test('Must handle k > array length', () => {
    const input = [1, 2, 3];
    expect(ArrayRotation.bruteForce([...input], 5)).toEqual([2, 3, 1]);
    expect(ArrayRotation.reversalMethod([...input], 5)).toEqual([2, 3, 1]);
    expect(ArrayRotation.cyclicMethod([...input], 5)).toEqual([2, 3, 1]);
  });

  test('Must handle negative k values (rotate left)', () => {
    const input = [1, 2, 3];
    expect(ArrayRotation.bruteForce([...input], -1)).toEqual([2, 3, 1]);
    expect(ArrayRotation.reversalMethod([...input], -1)).toEqual([2, 3, 1]);
    expect(ArrayRotation.cyclicMethod([...input], -1)).toEqual([2, 3, 1]);
  });

  test('Must handle strings', () => {
    const input = ['a', 'b', 'c', 'd'];
    expect(ArrayRotation.bruteForce([...input], 1)).toEqual(['d', 'a', 'b', 'c']);
    expect(ArrayRotation.reversalMethod([...input], 1)).toEqual(['d', 'a', 'b', 'c']);
    expect(ArrayRotation.cyclicMethod([...input], 1)).toEqual(['d', 'a', 'b', 'c']);
  });

  test('Must handle complex objects', () => {
    const userA = { name: 'Alice' };
    const userB = { name: 'Bob' };
    expect(ArrayRotation.bruteForce([userA, userB], 1)).toEqual([userB, userA]);
    expect(ArrayRotation.reversalMethod([userA, userB], 1)).toEqual([userB, userA]);
    expect(ArrayRotation.cyclicMethod([userA, userB], 1)).toEqual([userB, userA]);
  });

  test('Must handle k=0', () => {
    const input = [1, 2, 3];
    expect(ArrayRotation.bruteForce([...input], 0)).toEqual([1, 2, 3]);
    expect(ArrayRotation.reversalMethod([...input], 0)).toEqual([1, 2, 3]);
    expect(ArrayRotation.cyclicMethod([...input], 0)).toEqual([1, 2, 3]);
  });

  test('Must handle empty arrays', () => {
    const emptyArray: number[] = [];
    expect(ArrayRotation.bruteForce([...emptyArray], 0)).toEqual([]);
    expect(ArrayRotation.reversalMethod([...emptyArray], 0)).toEqual([]);
    expect(ArrayRotation.cyclicMethod([...emptyArray], 0)).toEqual([]);
  });

  test('Must handle empty arrays with k values', () => {
    const emptyArray: string[] = [];
    expect(ArrayRotation.bruteForce([...emptyArray], 5)).toEqual([]);
    expect(ArrayRotation.reversalMethod([...emptyArray], 5)).toEqual([]);
    expect(ArrayRotation.cyclicMethod([...emptyArray], 5)).toEqual([]);
  });
});
