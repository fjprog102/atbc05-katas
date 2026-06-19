import { DigitRoot } from './sum-digits';

describe('DigitRoot', () => {
  it('should pass the examples from the README', () => {
    // Example 1: 38
    const expected1 = 2

    const result1_iterative = DigitRoot.iterative(38)
    const result1_mathematical = DigitRoot.mathematical(38)

    expect(JSON.stringify(result1_iterative)).toBe(JSON.stringify(expected1));
    expect(JSON.stringify(result1_mathematical)).toBe(JSON.stringify(expected1));

    // Example 2: 9875
    const expected2 = 2

    const result2_iterative = DigitRoot.iterative(9875)
    const result2_mathematical = DigitRoot.mathematical(9875)

    expect(JSON.stringify(result2_iterative)).toBe(JSON.stringify(expected2));
    expect(JSON.stringify(result2_mathematical)).toBe(JSON.stringify(expected2));

  });

  it('should handle edge cases mentioned in constraints', () => {
    // Example 3: 9 (single digit)
    const expected3 = 9

    const result3_iterative = DigitRoot.iterative(9)
    const result3_mathematical = DigitRoot.mathematical(9)

    expect(JSON.stringify(result3_iterative)).toBe(JSON.stringify(expected3));
    expect(JSON.stringify(result3_mathematical)).toBe(JSON.stringify(expected3));

    // Example 4: 0
    const expected4 = 0

    const result4_iterative = DigitRoot.iterative(0)
    const result4_mathematical = DigitRoot.mathematical(0)

    expect(JSON.stringify(result4_iterative)).toBe(JSON.stringify(expected4));
    expect(JSON.stringify(result4_mathematical)).toBe(JSON.stringify(expected4));

    // Example 5: -38 (negative number)
    const expected5 = 2

    const result5_iterative = DigitRoot.iterative(-38)
    const result5_mathematical = DigitRoot.mathematical(-38)

    expect(JSON.stringify(result5_iterative)).toBe(JSON.stringify(expected5));
    expect(JSON.stringify(result5_mathematical)).toBe(JSON.stringify(expected5));

    // Example 6: 999 (large number)
    const expected6 = 9

    const result6_iterative = DigitRoot.iterative(999)
    const result6_mathematical = DigitRoot.mathematical(999)

    expect(JSON.stringify(result6_iterative)).toBe(JSON.stringify(expected6));
    expect(JSON.stringify(result6_mathematical)).toBe(JSON.stringify(expected6));
  });
});