export const lpalindrome = (text: string): string => {
    
    const removeUniqueNotMiddleChars = (text: string) => {
        console.log(`==== Original: ${text} ====`);

        if(text.length <= 1) return text[0];

        const unique = (c: string) => text.indexOf(c) === text.lastIndexOf(c);

        const uniqueCharCount = text
            .split('')
            .filter(c => unique(c))
            .length

        if(uniqueCharCount === text.length){
            console.log(`===== allUnique =${text[0]} ====\n\n`)
            return text[0];
        }

        const middle = Math.floor(text.length / 2);
        const leftLimit = middle-uniqueCharCount;
        const rightLimit = middle+uniqueCharCount;

        console.log(`Length: ${text.length} | U: ${uniqueCharCount}`)
        console.log(`M: ${middle} | L: ${leftLimit} | R: ${rightLimit}`);

        const res = text
            .split('')
            .filter(c => {

                const inMiddle = text.length % 2 === 0
                    ? leftLimit < text.indexOf(c) && text.indexOf(c) < rightLimit
                    : text.indexOf(c) === middle;
                
                console.log(`char: ${c} | inmiddle: ${inMiddle}`)
                return !unique(c) || (unique(c) && inMiddle);
            })
            .join('');

        console.log(`===== cleaned=${res} ====\n\n`)

        return res;
    }

    const res = text;
    const mem: string[] = []

    for(let i=0; i<text.length; i++){
        for(let j=0; j<i; j++){
            const currSub = text.substring(j, i+1);
            const cleanSub = removeUniqueNotMiddleChars(currSub);
            
        }
    }

    return res;
}
const text = 'character';
console.log("=================\nResult: ",lpalindrome(text));