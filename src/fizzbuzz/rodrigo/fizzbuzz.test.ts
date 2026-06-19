import { fizzBuzzExtended } from "./fizzbuzz";

describe('fizzBuzzExtended', () => {

  it('should pass README example 1', () => {
    const rules1 = [
      { divisor: 3, word: 'Fizz' },
      { divisor: 5, word: 'Buzz' }
    ];
    const expectedOutput1 = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"];
    const result = fizzBuzzExtended(15, rules1);
    expect(result).toBeDefined();
    expect(result.length).toBe(15);
    expect(result).toEqual(expectedOutput1);
  });


  it('should pass README example 2', () => {
    const rules2 = [
      { divisor: 2, word: "Two" },
      { divisor: 3, word: "Three" }
    ];

    const expectedOutput2 = ["1", "Two", "Three", "Two", "5", "TwoThree", "7", "Two", "Three", "Two", "11", "TwoThree", "13", "Two", "Three", "Two", "17", "TwoThree", "19", "Two"];

    const result2 = fizzBuzzExtended(20, rules2);
    expect(result2).toBeDefined();
    expect(result2.length).toBe(20);
    expect(result2).toEqual(expectedOutput2);
  });

  it('should handle edge cases mentioned in constraints', () => {
    const rulesEstandar = [{ divisor: 3, word: 'Fizz' }];
    expect(fizzBuzzExtended(0, rulesEstandar)).toEqual([]);

    expect(fizzBuzzExtended(3, [])).toEqual(["1", "2", "3"]);

    const unaSolaRegla = [{ divisor: 2, word: 'Pair' }];
    expect(fizzBuzzExtended(4, unaSolaRegla)).toEqual(["1", "Pair", "3", "Pair"]);

    const reglasSuperpuestas = [
      { divisor: 2, word: 'Foo' },
      { divisor: 4, word: 'Bar' }
    ];
    const resultadoSuperpuesto = fizzBuzzExtended(4, reglasSuperpuestas);
    expect(resultadoSuperpuesto[3]).toBe("FooBar");
  });
});
