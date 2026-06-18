export const lpalindrome = (text: string): string => {
    const lenght = text.length;
    const res = '';

    // Return first char if there is no repeated chars
    const onlyDifferent = text
        .split('')
        .every((c, _, a) => a.indexOf(c) === a.lastIndexOf(c));

    if(onlyDifferent){
        return text[0];
    }

    // Remove unique chars except those who are in the middle
    const uniqueCharCount = text
        .split('')
        .filter((c, _, a) => a.indexOf(c) === a.lastIndexOf(c))
        .length

    const withoutUnique = text
        .split('')
        .filter((c, _, a) => {
            const isCharRepeated = a.indexOf(c) !== a.lastIndexOf(c);
            const isCharInMiddle = lenght % 2 === 0 
                ? a.indexOf(c) <= Math.floor(lenght/2) + uniqueCharCount && a.indexOf(c) >= Math.floor(lenght/2) - uniqueCharCount
                : a.indexOf(c) === Math.floor(lenght/2);

            return isCharRepeated || (!isCharRepeated && isCharInMiddle)
        })

        console.log(withoutUnique)

    return ''
}
const text = 'bbbab';
console.log("=================\nResult: ",lpalindrome(text));