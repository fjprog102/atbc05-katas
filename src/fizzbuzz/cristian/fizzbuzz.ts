interface FizzBuzzRule{
    divisor: number;
    word: string;
}

export function fizzBuzzExtended(n: number, rules: FizzBuzzRule[]): string[]{
    const result: string[] = [];
    
    for (let i = 1; i<=n; i++)
    {
        let word = "";

        for(const rule of rules)
        {
            if(i % rule.divisor === 0){
                word = word + rule.word;
            }
        }

        if(word !== ""){
            result.push(word)
        }
        else
        {
            result.push(String(i));
        }
    }
    return result
}