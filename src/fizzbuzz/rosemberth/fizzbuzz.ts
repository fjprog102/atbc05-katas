interface FizzBuzzRule {
  divisor: number;
  word: string;
}

export function fizzBuzzExtended(n: number, rules: FizzBuzzRule[]): string[] {
  const results: string[] = [];

  for (let i = 1; i <= n; i++) {
    // accumulate matching words for this number
    let word = "";

    for (let j = 0; j < rules.length; j++) {
      if (i % rules[j].divisor === 0) {
        word += rules[j].word;
      }
    }

    // if no rule matched, just push the number as string
    results.push(word === "" ? i.toString() : word);
  }

  return results;
}