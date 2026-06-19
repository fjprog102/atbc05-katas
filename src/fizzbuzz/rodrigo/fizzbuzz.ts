interface FizzBuzzRule {
    divisor: number,
    word: string
}

export function fizzBuzzExtended(n:number, rules: FizzBuzzRule[]): string[]{
    if (n < 1) return [];
    const result: string[] = [];

    for( let i = 1; i <= n; i++ ){
        let resultWord = '';
        for(const rule of rules){
            if( i % rule.divisor === 0){
                resultWord = resultWord + rule.word;
            }
        }
        result.push(resultWord || i.toString());
    }
    return result;
}
