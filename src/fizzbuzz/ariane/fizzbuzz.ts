export interface FizzBuzzRule {
  divisor: number;
  word: string;
}

export function fizzBuzzExtended(n: number, rules: FizzBuzzRule[]): string[]{
    const result: string[] = [];

    for (let i = 1; i <= n; i++) { // Start from 1 to n
        let value = '';
        for (const rule of rules) {
            if (i % rule.divisor === 0) {
                value += rule.word; // Append the word if the rule matches
            }
        }
        if (value === '') {
            value = i.toString(); //  number as a string if the rules dont match
        }
        result.push(value);
    }
    return result;
}