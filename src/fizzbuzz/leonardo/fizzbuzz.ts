interface FizzBuzzRule {
    divisor: number;
    word: string;
}

export function fizzbuzzExtended(n: number, rules: FizzBuzzRule[]): string[] {
    const res: string[] = [];

    if(n === 0) return res;

    for(let i=1; i<=n; i++){
        let text = '';
        for(const rule of rules){
            if(i % rule.divisor === 0) text += rule.word;
        }
        if(text === '') text = i.toString();

        res.push(text);
    }
    return res;
}
