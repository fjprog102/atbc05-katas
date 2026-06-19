import { fizzBuzzExtended } from './fizzbuzz';

describe('fizzBuzzExtended', () => {
  it('should pass the examples from the README', () => {
    // Example 1: Classic FizzBuzz (n=15)
    const rules1 = [
      { divisor: 3, word: 'Fizz' },
      { divisor: 5, word: 'Buzz' }
    ];
    
    const result1 = fizzBuzzExtended(15, rules1);

    const expected1 = [
      "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
      "11", "Fizz", "13", "14", "FizzBuzz"
    ];
    
    expect(JSON.stringify(result1)).toBe(JSON.stringify(expected1));

    // Example 2: Two/Three (n=20)

    const rules2 = [
      { divisor: 2, word: "Two" },
      { divisor: 3, word: "Three" }
    ];
    
    const result2 = fizzBuzzExtended(20, rules2);

    const expected2 = [
      "1", "Two", "Three", "Two", "5", "TwoThree", "7", "Two", "Three", "Two",
      "11", "TwoThree", "13", "Two", "Three", "Two", "17", "TwoThree", "19", "Two"
    ];
    
    expect(JSON.stringify(result2)).toBe(JSON.stringify(expected2));
  });

  it('should handle edge cases mentioned in constraints', () => {
    // Example 3: Empty rules (n=5)

    const result3 = fizzBuzzExtended(5, []);
    const expected3 = ["1", "2", "3", "4", "5"];
    
    expect(JSON.stringify(result3)).toBe(JSON.stringify(expected3));

    // Example 4: Three rules overlapping (n=12)

    const rules4 = [
      { divisor: 2, word: "A" },
      { divisor: 3, word: "B" },
      { divisor: 4, word: "C" }
    ];
    
    const result4 = fizzBuzzExtended(12, rules4);

    const expected4 = [
      "1", "A", "B", "AC", "5", "AB",
      "7", "AC", "B", "A", "11", "ABC"
    ];
    
    expect(JSON.stringify(result4)).toBe(JSON.stringify(expected4));
  });
});